'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { API_ENDPOINTS } from '@/config/api';

const Login = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const responseData = await response.json();
      localStorage.setItem('accessToken', responseData.access_token);
      localStorage.setItem('refreshToken', responseData.refresh_token);
      router.push('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-white ${
        isDarkMode && 'bg-gray-900'
      } py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900`}
    >
      <button
        type='button'
        onClick={toggleDarkMode}
        className='absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
      >
        {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2
            className={`mt-6 text-center text-3xl font-extrabold text-[#CF23B8]`}
          >
            Sign in to your account
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, // Kiểm tra định dạng email
            })}
            type='text'
            className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
            placeholder='Email'
          />
          {errors.email && <p className='text-red-500'>Email is required</p>}
          <input
            {...register('password', { required: true })}
            type='password'
            className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1'
            placeholder='Password'
          />
          {errors.password && (
            <p className='text-red-500'>Password is required</p>
          )}
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
