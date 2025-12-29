import React, { useState, useEffect } from 'react';
import { createWaterEffect } from '../utils/waterEffect';

interface QuestionScreenProps {
  numPlayers: number;
  onReset: () => void;
}

const QUESTION = 'AMB QUINS COLORS JUGA EL PRIMER EQUIP DEL CLUB DE FUTBOL SANT FELIU DE GUÍXOLS?';

const ANSWERS = [
  { id: 0, text: 'Taronja i blanc', correct: false },
  { id: 1, text: 'Blau i Blanc', correct: false },
  { id: 2, text: 'Vermell i Blanc', correct: false },
  { id: 3, text: 'Blau i Vermell', correct: true },
  { id: 4, text: 'Groc i Negre', correct: false },
];

export const QuestionScreen: React.FC<QuestionScreenProps> = ({ numPlayers, onReset }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showWrongEffect, setShowWrongEffect] = useState(false);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showResult) return; // Si ya se mostró el resultado, no hacer nada

      // Teclas numéricas 1-5 para seleccionar
      if (e.key >= '1' && e.key <= '5') {
        const index = parseInt(e.key) - 1;
        setSelectedAnswer(index);
      }

      // Flechas arriba/abajo para navegar
      if (e.key === 'ArrowUp' && selectedAnswer !== null && selectedAnswer > 0) {
        setSelectedAnswer(selectedAnswer - 1);
      }
      if (e.key === 'ArrowDown' && selectedAnswer !== null && selectedAnswer < ANSWERS.length - 1) {
        setSelectedAnswer(selectedAnswer + 1);
      }

      // Enter para confirmar
      if (e.key === 'Enter' && selectedAnswer !== null) {
        handleConfirm();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAnswer, showResult]);

  const handleAnswerClick = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null || showResult) return;

    const answer = ANSWERS[selectedAnswer];
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
        {/* Indicador de jugadores */}
        <div className="player-indicator">
          {numPlayers} Jugadors
        </div>

        {/* Pregunta */}
        <div className="question-box">
          <h2 className="question-text">{QUESTION}</h2>
        </div>

        {/* Respuestas */}
        <div className="answers-container">
          {ANSWERS.map((answer, index) => {
            const isSelected = selectedAnswer === index;
            const showCorrect = showResult && answer.correct;
            const showIncorrect = showResult && isSelected && !answer.correct;

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
            Usa las <kbd>↑</kbd> <kbd>↓</kbd> teclas o haz clic para seleccionar
            <br />
            Presiona <kbd>Enter</kbd> para confirmar
          </div>
        )}

        {/* Botón de reinicio */}
        {showResult && (
          <button onClick={onReset} className="reset-button">
            ← Tornar a l'inici
          </button>
        )}
      </div>
    </div>
  );
};
