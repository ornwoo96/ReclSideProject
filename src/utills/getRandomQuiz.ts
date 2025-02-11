export type QuizItem = {
  id: number;
  question: string;
  correctAnswer: "O" | "X";
};
  
const QUIZ_DATA: QuizItem[] = [
  {
    id: 1,
    question: "옷 한 벌 재활용하면 약 7,000L의 물을 절약할 수 있다.",
    correctAnswer: "O",
  },
  {
    id: 2,
    question: "옷 한 벌 재활용해도 탄소배출량에는 영향을 미치지 않는다.",
    correctAnswer: "X",
  },
  {
    id: 3,
    question: "옷 한 벌 재활용하면 약 2.5kg의 탄소배출을 줄일 수 있다.",
    correctAnswer: "O",
  },
  {
    id: 4,
    question: "옷 한 벌 재활용해도 석유소비량은 줄어들지 않는다.",
    correctAnswer: "X",
  },
  {
    id: 5,
    question: "옷 한 벌 재활용하면 약 10kWh의 에너지를 절약할 수 있다.",
    correctAnswer: "O",
  },
];

export const getRandomQuiz = (): QuizItem => {
  const randomIndex = Math.floor(Math.random() * QUIZ_DATA.length);
  return QUIZ_DATA[randomIndex];
};