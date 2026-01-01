import React, { useState, useEffect } from 'react';
import { createWaterEffect } from '../utils/waterEffect';
import { QUESTIONS } from '../utils/questions';

interface QuestionScreenProps {
  numPlayers: number;
  onReset: () => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({ numPlayers, onReset }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1); // Jugador actual (1, 2, 3...)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showWrongEffect, setShowWrongEffect] = useState(false);
  const [attemptedAnswers, setAttemptedAnswers] = useState<number[]>([]); // Respuestas ya intentadas

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const numAnswers = currentQuestion.answers.length;

      // Si está mostrando resultado de respuesta correcta, usar flechas para navegar entre preguntas
      if (showResult && isCorrect) {
        // Flecha derecha: siguiente pregunta
        if (e.key === 'ArrowRight' && !isLastQuestion) {
          handleNext();
          return;
        }
        // Flecha izquierda: pregunta anterior
        if (e.key === 'ArrowLeft' && !isFirstQuestion) {
          handlePrevious();
          return;
        }
        return;
      }

      // Si mostró resultado incorrecto, esperar a que se limpie
      if (showResult && !isCorrect) {
        return;
      }

      // Navegación de respuestas
      
      // Teclas numéricas para seleccionar
      if (e.key >= '1' && e.key <= String(numAnswers)) {
        const index = parseInt(e.key) - 1;
        // No permitir seleccionar respuestas ya intentadas
        if (!attemptedAnswers.includes(index)) {
          setSelectedAnswer(index);
        }
      }

      // Flechas arriba/abajo para navegar entre respuestas
      if (e.key === 'ArrowUp' && selectedAnswer !== null && selectedAnswer > 0) {
        let newIndex = selectedAnswer - 1;
        // Saltar respuestas ya intentadas
        while (newIndex >= 0 && attemptedAnswers.includes(newIndex)) {
          newIndex--;
        }
        if (newIndex >= 0) {
          setSelectedAnswer(newIndex);
        }
      }
      if (e.key === 'ArrowDown' && selectedAnswer !== null && selectedAnswer < numAnswers - 1) {
        let newIndex = selectedAnswer + 1;
        // Saltar respuestas ya intentadas
        while (newIndex < numAnswers && attemptedAnswers.includes(newIndex)) {
          newIndex++;
        }
        if (newIndex < numAnswers) {
          setSelectedAnswer(newIndex);
        }
      }

      // Enter para confirmar respuesta
      if (e.key === 'Enter' && selectedAnswer !== null && !attemptedAnswers.includes(selectedAnswer)) {
        handleConfirm();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAnswer, showResult, currentQuestion, isLastQuestion, isFirstQuestion, isCorrect, attemptedAnswers]);

  const handleAnswerClick = (index: number) => {
    if (showResult || attemptedAnswers.includes(index)) return;
    setSelectedAnswer(index);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null || showResult || attemptedAnswers.includes(selectedAnswer)) return;

    const answer = currentQuestion.answers[selectedAnswer];
    setIsCorrect(answer.correct);
    setShowResult(true);

    if (answer.correct) {
      // Efecto de agua - ACERTÓ
      createWaterEffect();
    } else {
      // Efecto de error - FALLÓ
      setShowWrongEffect(true);
      
      // Añadir respuesta a las intentadas
      setAttemptedAnswers([...attemptedAnswers, selectedAnswer]);
      
      // Pasar al siguiente jugador después de 3 segundos
      setTimeout(() => {
        setShowWrongEffect(false);
        setShowResult(false);
        setSelectedAnswer(null);
        
        // Cambiar al siguiente jugador
        const nextPlayer = currentPlayer >= numPlayers ? 1 : currentPlayer + 1;
        setCurrentPlayer(nextPlayer);
      }, 3000);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) return;
    
    // Pasar a siguiente pregunta
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentPlayer(1); // Reiniciar al jugador 1
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
    setAttemptedAnswers([]); // Limpiar respuestas intentadas
  };

  const handlePrevious = () => {
    if (isFirstQuestion) return;
    
    // Volver a pregunta anterior
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setCurrentPlayer(1); // Reiniciar al jugador 1
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
    setAttemptedAnswers([]); // Limpiar respuestas intentadas
  };

  return (
    <div className="app-container flex items-center justify-center">
      {/* Efectos visuales de error */}
      {showWrongEffect && (
        <>
          <div className="wrong-border" />
          <div className="wrong-x">✕</div>
        </>
      )}

      <div className="question-container">
        {/* Indicador de turno del jugador */}
        {!isCorrect && (
          <div className="player-turn-indicator">
            TORN DEL JUGADOR {currentPlayer}
          </div>
        )}

        {/* Pregunta */}
        <div className="question-box">
          <h2 className="question-text">{currentQuestion.text}</h2>
        </div>

        {/* Respuestas */}
        <div className="answers-container">
          {currentQuestion.answers.map((answer, index) => {
            const isSelected = selectedAnswer === index;
            const wasAttempted = attemptedAnswers.includes(index);
            const showCorrect = showResult && isCorrect && answer.correct;
            const showIncorrect = showResult && isSelected && !isCorrect;

            return (
              <button
                key={answer.id}
                onClick={() => handleAnswerClick(index)}
                className={`answer-button ${
                  isSelected ? 'selected' : ''
                } ${showCorrect ? 'correct' : ''} ${showIncorrect ? 'incorrect' : ''} ${
                  wasAttempted ? 'attempted' : ''
                }`}
                disabled={wasAttempted || (showResult && !isCorrect)}
              >
                <div className="answer-letter">
                  {String.fromCharCode(65 + index)}
                </div>
                <div className="answer-text">{answer.text}</div>
              </button>
            );
          })}
        </div>

        {/* Instrucciones */}
        {!showResult && (
          <div className="instructions">
            Prem <kbd>Enter</kbd> per confirmar
          </div>
        )}

        {/* Instrucciones después de acertar */}
        {showResult && isCorrect && (
          <div className="instructions">
            {!isFirstQuestion && <span><kbd>←</kbd> Pregunta anterior · </span>}
            {!isLastQuestion && <span><kbd>→</kbd> Següent pregunta</span>}
            {isLastQuestion && <span>Última pregunta</span>}
          </div>
        )}
      </div>
    </div>
  );
};
