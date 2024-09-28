import { shuffleArray } from '~/helpers/helpers';
import type * as I from '../helpers/interface';
import axios from 'axios';

export const getQuestion = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=11&type=multiple&difficulty=easy&category=18');
      let datas = await response.data.results;
      datas = datas.map((data: I.QuizQuestion) => {
        const shuffledAns = shuffleArray([
          ...data.incorrect_answers,
          data.correct_answer,
        ]);
        return { ...data, answers: shuffledAns };
      });
      return datas;
    } catch (error) {
      console.log(error);
    }
  };
