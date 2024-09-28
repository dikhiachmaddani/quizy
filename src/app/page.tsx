'use client';

import CustomLayout from '~/components/CustomLayout';
import Button from '../components/form/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { NavbarContext } from '../providers/navbar-provider';
import { resetQuizResult } from '~/helpers/helpers';
import { useRouter } from 'next/navigation';
import { clearLocalStorage } from '~/service/quizLocalStorage';

interface IFormInput {
  username: string;
}

export default function Home() {
  const router = useRouter();
  const { user, setUser, setQuizResult } = useContext(NavbarContext);
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();

  useEffect(() => {
    if (user !== '') {
      router.push('/main-menu');
    }
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    clearLocalStorage();
    setUser(data.username);
    resetQuizResult(setQuizResult);
    localStorage.setItem('user', data.username);
    router.push('/main-menu');
  };

  return (
    <CustomLayout customPadding={50}>
      <div className='text-left text-[#2B1E50]'>
        <h1 className='text-3xl font-bold'>Welcome to Quizy Quiz!</h1>
        <p className='text-md mt-1 mb-4'>Silahkan login terlebih dahulu untuk bermain quiz.</p>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="username" className="font-bold text-sm">Username or Email</label>
            <input
              className="px-4 py-3 rounded-xl border border-gray-300 focus:border-[#CB8CD1] hover:border-[#CB8CD1] focus:outline-none transition-all duration-200 ease-in-out"
              {...register("username", { required: "Username or Email is required" })} />
            {errors.username && <p role="alert" className='text-red-500 text-sm'>{errors.username.message}</p>}
          </div>
          <div>
            <Button type='submit' title='Login' color='green' width='sm' />
          </div>
        </form>
      </div>
    </CustomLayout>
  );
}
