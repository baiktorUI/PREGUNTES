import React from 'react';

interface PlayerSetupProps {
  onStart: (numPlayers: number) => void;
}

export const PlayerSetup: React.FC<PlayerSetupProps> = ({ onStart }) => {
  return (
    <div className="app-container flex items-center justify-center">
      <div className="setup-container">
        {/* Logo arriba como título */}
        <img src="/logo-mullada.png" alt="Logo Experiència Mullada" className="setup-logo-top" />
        
        <div className="player-buttons">
          <button
            onClick={() => onStart(2)}
            className="player-button"
          >
            2 JUGADORS
          </button>

          <button
            onClick={() => onStart(3)}
            className="player-button"
          >
            3 JUGADORS
          </button>
        </div>
      </div>
    </div>
  );
};
