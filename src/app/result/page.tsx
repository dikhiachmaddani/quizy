'use client';

import CustomLayout from '~/components/CustomLayout';
import Button from '../../components/form/Button';
import { useRouter } from 'next/navigation';
import { resetQuizResult } from '~/helpers/helpers';
import { useContext, useState } from 'react';
import { NavbarContext } from '~/providers/navbar-provider';
import type * as I from '~/helpers/interface';
import { clearLocalStorage, getResultFromLocalStorage } from '~/service/quizLocalStorage';

export default function Result() {
  const router = useRouter();
  const { setQuizResult } = useContext(NavbarContext);
  const [quizResult] = useState<I.QuizResultProps>(
    getResultFromLocalStorage()
  );

  const onButtonHandler = (clicked: string) => {
    resetQuizResult(setQuizResult);
    clearLocalStorage(true);
    clicked === 'play-again'
      ? router.push('/quiz')
      : router.push('/main-menu');
  };

  return (
    <CustomLayout>
      <div className='flex justify-center w-full'>
        <div className='text-center text-[#2B1E50]'>
          <h1 className='text-3xl font-bold mb-4'>Result Quiz!</h1>
          <div className='flex justify-between'>
            <p className='text-lg font-semibold'>Total Answer</p>
            <p className='text-lg font-semibold'>{quizResult.correct + quizResult.wrong}/10</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-lg font-semibold'>Total Correct</p>
            <p className='text-lg font-semibold'>{quizResult.correct}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-lg font-semibold'>Total Incorrect</p>
            <p className='text-lg font-semibold'>{quizResult.wrong}</p>
          </div>
          <div className='flex flex-col gap-4 mt-6'>
            <div className='px-6'>
              <Button title='Back to Main Menu' color='black' width='sm' onClick={() => onButtonHandler('/main-menu')} />
            </div>
            <div className='px-6'>
              <Button title={`Let's Play Again`} color='green' width='sm' onClick={() => onButtonHandler("play-again")} />
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
