export interface Answer {
  id: number;
  text: string;
  correct: boolean;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'AMB QUINS COLORS JUGA EL PRIMER EQUIP DEL CLUB DE FUTBOL SANT FELIU DE GUÍXOLS?',
    answers: [
      { id: 0, text: 'Taronja i blanc', correct: false },
      { id: 1, text: 'Blau i Blanc', correct: false },
      { id: 2, text: 'Vermell i Blanc', correct: false },
      { id: 3, text: 'Blau i Vermell', correct: true },
      { id: 4, text: 'Groc i Negre', correct: false },
    ],
  },
  {
    id: 2,
    text: "QUIN ANY ES VA CONSTRUIR L'ARC DE SANT BENET?",
    answers: [
      { id: 0, text: '1458', correct: false },
      { id: 1, text: '1747', correct: true },
      { id: 2, text: '1859', correct: false },
      { id: 3, text: '1232', correct: false },
      { id: 4, text: '1169', correct: false },
    ],
  },
  {
    id: 3,
    text: 'QUI VA BATEJAR A SANT FELIU DE GUÍXOLS COM A BRESSOL DE LA COSTA BRAVA?',
    answers: [
      { id: 0, text: 'Josep Pla', correct: false },
      { id: 1, text: 'Ferran Agulló', correct: true },
      { id: 2, text: 'Jordi Basté', correct: false },
      { id: 3, text: 'Santiago Russinyol', correct: false },
      { id: 4, text: 'Juli Garreta', correct: false },
    ],
  },
];
