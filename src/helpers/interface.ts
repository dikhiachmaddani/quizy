export interface QuizAnswers {
  incorrect_answers: string[];
  correct_answer: string;
}

export interface QuizQuestion extends QuizAnswers {
  category: string;
  difficulty: string;
  question: string;
  type: string;
}

export interface QuizResultProps {
  correct: number;
  wrong: number;
}

export interface NavbarProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setQuizResult: React.Dispatch<React.SetStateAction<QuizResultProps>>;
}
