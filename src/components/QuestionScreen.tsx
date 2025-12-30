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

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showResult) return;

      const numAnswers = currentQuestion.answers.length;

      // Teclas numéricas para seleccionar
      if (e.key >= '1' && e.key <= String(numAnswers)) {
        const index = parseInt(e.key) - 1;
        setSelectedAnswer(index);
      }

      // Flechas arriba/abajo para navegar
      if (e.key === 'ArrowUp' && selectedAnswer !== null && selectedAnswer > 0) {
        setSelectedAnswer(selectedAnswer - 1);
      }
      if (e.key === 'ArrowDown' && selectedAnswer !== null && selectedAnswer < numAnswers - 1) {
        setSelectedAnswer(selectedAnswer + 1);
      }

      // Enter para confirmar
      if (e.key === 'Enter' && selectedAnswer !== null) {
        handleConfirm();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAnswer, showResult, currentQuestion]);

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

        {/* Botones de navegación - Solo iconos */}
        {showResult && (
          <div className="navigation-buttons">
            <button onClick={onReset} className="nav-button-icon" title="Tornar a l'inici">
              ←
            </button>
            {!isLastQuestion && (
              <button onClick={handleNext} className="nav-button-icon" title="Següent pregunta">
                →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
