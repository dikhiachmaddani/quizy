import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type * as I from '../helpers/interface';

export const resetQuizResult = (
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>
) => {
  setQuizResult({
    correct: 0,
    wrong: 0,
  });
};

export const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.4);
};

export const isLoggedIn = (user: string, navigate: AppRouterInstance) => {
  if (user === '') {
    navigate.push('/');
  }
};

export const displayCountDown = (countDown: number) => {
  if (countDown === 60) {
    return '01:00';
  } else if (countDown > 9) {
    return `00:${countDown}`;
  } else {
    return `00:0${countDown}`;
  }
};
