import React, { useState } from 'react';
import { PlayerSetup } from './components/PlayerSetup.tsx';
import { QuestionScreen } from './components/QuestionScreen.tsx';
import type { GameState } from './types/trivia.ts';
import './index.css';
import './TriviaApp.css';

const TriviaApp: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    numPlayers: 0,
    currentQuestion: 0,
    hasStarted: false,
  });

  const handleStart = (numPlayers: number) => {
    setGameState({
      numPlayers,
      currentQuestion: 0,
      hasStarted: true,
    });
  };

  const handleReset = () => {
    setGameState({
      numPlayers: 0,
      currentQuestion: 0,
      hasStarted: false,
    });
  };

  // Pantalla de configuración
  if (!gameState.hasStarted) {
    return <PlayerSetup onStart={handleStart} />;
  }

  // Pantalla de pregunta
  return <QuestionScreen numPlayers={gameState.numPlayers} onReset={handleReset} />;
};

export default TriviaApp;
