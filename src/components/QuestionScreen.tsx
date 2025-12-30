import React, { useState, useEffect } from 'react';
import { createWaterEffect } from '../utils/waterEffect';
import { QUESTIONS } from '../utils/questions';

interface QuestionScreenProps {
  numPlayers: number;
  onReset: () => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({ numPlayers, onReset }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showWrongEffect, setShowWrongEffect] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const numAnswers = currentQuestion.answers.length;

      // Si está mostrando resultado, usar flechas para navegar entre preguntas
      if (showResult) {
        // Flecha derecha o abajo: siguiente pregunta
        if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && !isLastQuestion) {
          handleNext();
          return;
        }
        // Flecha izquierda o arriba: pregunta anterior
        if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && !isFirstQuestion) {
          handlePrevious();
          return;
        }
        return;
      }

      // Navegación de respuestas (cuando NO está mostrando resultado)
      
      // Teclas numéricas para seleccionar
      if (e.key >= '1' && e.key <= String(numAnswers)) {
        const index = parseInt(e.key) - 1;
        setSelectedAnswer(index);
      }

      // Flechas arriba/abajo para navegar entre respuestas
      if (e.key === 'ArrowUp' && selectedAnswer !== null && selectedAnswer > 0) {
        setSelectedAnswer(selectedAnswer - 1);
      }
      if (e.key === 'ArrowDown' && selectedAnswer !== null && selectedAnswer < numAnswers - 1) {
        setSelectedAnswer(selectedAnswer + 1);
      }

      // Enter para confirmar respuesta
      if (e.key === 'Enter' && selectedAnswer !== null) {
        handleConfirm();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAnswer, showResult, currentQuestion, isLastQuestion, isFirstQuestion]);

  const handleAnswerClick = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null || showResult) return;

    const answer = currentQuestion.answers[selectedAnswer];
    setIsCorrect(answer.correct);
    setShowResult(true);

    if (answer.correct) {
      // Efecto de agua
      createWaterEffect();
    } else {
      // Efecto de error
      setShowWrongEffect(true);
      setTimeout(() => {
        setShowWrongEffect(false);
      }, 3000);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) return;
    
    // Pasar a siguiente pregunta
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  const handlePrevious = () => {
    if (isFirstQuestion) return;
    
    // Volver a pregunta anterior
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
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
        {/* Pregunta */}
        <div className="question-box">
          <h2 className="question-text">{currentQuestion.text}</h2>
        </div>

        {/* Respuestas */}
        <div className="answers-container">
          {currentQuestion.answers.map((answer, index) => {
            const isSelected = selectedAnswer === index;
            const showCorrect = showResult && isCorrect && answer.correct;
            const showIncorrect = showResult && isSelected && !isCorrect;

            return (
              <button
                key={answer.id}
                onClick={() => handleAnswerClick(index)}
                className={`answer-button ${
                  isSelected ? 'selected' : ''
                } ${showCorrect ? 'correct' : ''} ${showIncorrect ? 'incorrect' : ''}`}
                disabled={showResult}
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
            Usa <kbd>↑</kbd> <kbd>↓</kbd> per navegar · <kbd>Enter</kbd> per confirmar
          </div>
        )}

        {/* Instrucciones después de responder */}
        {showResult && (
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
