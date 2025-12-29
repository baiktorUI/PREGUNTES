import React, { useState } from 'react';

export default function TriviaApp() {
  const [screen, setScreen] = useState('players'); // 'players' o 'question'
  const [numPlayers, setNumPlayers] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const answers = [
    'Taronja i blanc',
    'Blau i Blanc',
    'Vermell i Blanc',
    'Blau i Vermell',
    'Groc i Negre'
  ];

  const handlePlayerSelection = (num) => {
    setNumPlayers(num);
    setScreen('question');
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  // PANTALLA 1: Selección de jugadores
  if (screen === 'players') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              TRIVIAL
            </h1>
            <p className="text-xl text-blue-200">
              Selecciona el nombre de jugadors
            </p>
          </div>

          {/* Botones de selección */}
          <div className="space-y-4">
            <button
              onClick={() => handlePlayerSelection(2)}
              className="w-full bg-white hover:bg-blue-50 text-blue-900 font-bold text-2xl py-8 px-6 rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-blue-500/50"
            >
              <div className="flex items-center justify-center gap-4">
                <span className="text-4xl">👥</span>
                <span>2 JUGADORS</span>
              </div>
            </button>

            <button
              onClick={() => handlePlayerSelection(3)}
              className="w-full bg-white hover:bg-blue-50 text-blue-900 font-bold text-2xl py-8 px-6 rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-blue-500/50"
            >
              <div className="flex items-center justify-center gap-4">
                <span className="text-4xl">👥👤</span>
                <span>3 JUGADORS</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // PANTALLA 2: Pregunta
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Indicador de jugadores */}
        <div className="text-center mb-6">
          <span className="bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold">
            {numPlayers} Jugadors
          </span>
        </div>

        {/* Pregunta */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center leading-relaxed">
            AMB QUINS COLORS JUGA EL PRIMER EQUIP DEL CLUB DE FUTBOL SANT FELIU DE GUÍXOLS?
          </h2>
        </div>

        {/* Respuestas */}
        <div className="space-y-4">
          {answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={`w-full text-left py-6 px-8 rounded-2xl font-semibold text-lg transition-all transform hover:scale-102 shadow-xl ${
                selectedAnswer === answer
                  ? 'bg-yellow-400 text-gray-900 shadow-yellow-500/50 scale-102'
                  : 'bg-white hover:bg-gray-50 text-gray-800'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 bg-green-700 text-white rounded-full font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{answer}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Botón volver */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setScreen('players');
              setSelectedAnswer(null);
            }}
            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-full transition-all"
          >
            ← Tornar a l'inici
          </button>
        </div>
      </div>
    </div>
  );
}
