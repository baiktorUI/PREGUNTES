import React from 'react';

interface PlayerSetupProps {
  onStart: (numPlayers: number) => void;
}

export const PlayerSetup: React.FC<PlayerSetupProps> = ({ onStart }) => {
  return (
    <div className="app-container flex items-center justify-center">
      <div className="setup-container">
        <h1 className="setup-title">TRIVIAL</h1>
        <p className="setup-subtitle">Selecciona el nombre de jugadors</p>
        
        <div className="player-buttons">
          <button
            onClick={() => onStart(2)}
            className="player-button"
          >
            <span className="player-icon">👥</span>
            <span>2 JUGADORS</span>
          </button>

          <button
            onClick={() => onStart(3)}
            className="player-button"
          >
            <span className="player-icon">👥👤</span>
            <span>3 JUGADORS</span>
          </button>
        </div>
      </div>
    </div>
  );
};
