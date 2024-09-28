'use client';

import CustomLayout from '~/components/CustomLayout';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { NavbarContext } from '~/providers/navbar-provider';
import type * as I from '../../helpers/interface';
import { getQuestion } from '~/service/getQuestion';
import { isLoggedIn } from '~/helpers/helpers';
import Loading from '~/components/loading';
import CountDown from '../../components/CountDown';
import { QuizOptions } from '../../components/QuizOptions';
import QuizQuestionPanel from '~/components/QuizQuestion';
import { getIndexFromLocalStorage, getQuestionsFromLocalStorage } from '~/service/quizLocalStorage';

interface DatasProps extends I.QuizQuestion {
  answers: string[];
}

export default function Quiz() {
  const router = useRouter();
  const { user, setQuizResult } = useContext(NavbarContext);

  const [datas, setDatas] = useState<DatasProps[]>(getQuestionsFromLocalStorage());
  const [questionIndex, setQuestionIndex] = useState<number>(getIndexFromLocalStorage());
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    if (datas.length === 0) {
      try {
        const responseData = await getQuestion();
        if (responseData) {
          setDatas(responseData);
          localStorage.setItem('questions', JSON.stringify(responseData));
        }
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn(user, router);
    fetchData();
  }, []);

  const isEnded = () => {
    if (questionIndex === 9) {
      router.replace('/result');
    }
  };

  const isTimeOut = () => {
    localStorage.removeItem('countdown');
    router.push('/result');
  };
  console.log(questionIndex);
  
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CustomLayout customPadding={0}>
          <div className='w-full'>
            {questionIndex <= 9 ? (
              <div className='px-6 text-[#2B1E50]'>
                <CountDown questionIndex={questionIndex} isTimeOut={isTimeOut} />
                <QuizQuestionPanel text={datas[questionIndex].question} />
                <QuizOptions
                  {...datas[questionIndex]}
                  setQuestionIndex={setQuestionIndex}
                  setQuizResult={setQuizResult}
                  isEnded={isEnded} />
              </div>) : null
            }
          </div>
        </CustomLayout>
      )}
    </>
  );
}
