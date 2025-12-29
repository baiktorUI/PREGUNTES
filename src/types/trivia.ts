export interface GameState {
  numPlayers: number;
  currentQuestion: number;
  hasStarted: boolean;
}

export interface Answer {
  id: number;
  text: string;
  correct: boolean;
}
