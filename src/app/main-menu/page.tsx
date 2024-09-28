'use client';

import CustomLayout from '~/components/CustomLayout';
import Button from '../../components/form/Button';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useRef } from 'react';
import { NavbarContext } from '~/providers/navbar-provider';
import { isLoggedIn } from '~/helpers/helpers';
import { getQuestionsFromLocalStorage } from '~/service/quizLocalStorage';

export default function MainMenu() {
  const { user, setQuizResult } = useContext(NavbarContext);
  const router = useRouter();
  const isPausedRef = useRef<boolean>(
    getQuestionsFromLocalStorage().length > 1
  );

  useEffect(() => {
    isLoggedIn(user, router);
  }, []);

  const onPlayHandler = () => {
    setQuizResult({
      correct: 0,
      wrong: 0,
    });
    router.push('/quiz');
  };

  console.log(isPausedRef.current);
  

  return (
    <CustomLayout>
      <div className='flex justify-center w-full'>
        <div className='text-center text-[#2B1E50]'>
          <h1 className='text-3xl font-bold'>Welcome to Quizy Quiz!</h1>
          <p className='text-md mt-1 mb-4'>Klik play dan mari bermain kuis bersama kami.</p>
          <div className='flex flex-col gap-4'>
            <div className='px-6'>
              <Button title={isPausedRef.current ? 'Resume' : 'Play'} color='green' width='full' onClick={onPlayHandler} />
            </div>
            <div className='px-6'>
              <Button title='About Quizy Quiz' color='black' width='sm' onClick={() => router.push('/about')} />
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
