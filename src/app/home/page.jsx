'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../components/Layout';

const Home = ({ data }) => {
  const router = useRouter();

  return (
    <Layout>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {[1, 2, 3].map((project, index) => {
          return (
            <div
              key={index}
              className='bg-white shadow-md rounded-lg overflow-hidden'
            ></div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
