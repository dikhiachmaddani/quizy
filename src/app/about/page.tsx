'use client';

import CustomLayout from '~/components/CustomLayout';
import Button from '../../components/form/Button';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  return (
    <CustomLayout>
      <div className='flex justify-center w-full'>
        <div className='text-center text-[#2B1E50]'>
          <h1 className='text-3xl font-bold'>Welcome to Quizy Quiz!</h1>
          <p className='text-md mt-5 mb-4'>{`"Quizy Quiz is a web-based quiz application 
            I developed as part of my internship submission challenge at DOT Indonesia.
             Built within a React and TypeScript environment, this is the second iteration of my quiz project, 
             originally created four months ago. In this version, I've enhanced code structure and introduced new features."`}</p>
          <div className='mt-6 px-6'>
            <Button title='Back to Main Menu' color='black' width='sm' onClick={() => router.push('/main-menu')} />
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
