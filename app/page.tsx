import Aboutus from '@/components/aboutus';
import Hero from '@/components/hero';
import MostPopular from '@/components/mostpopular';
import React from 'react';
import { setTimeout } from 'timers';

const Page = () => {
  
  return (
    <>
      <Hero />
      <Aboutus />
      <MostPopular />
    </>
  
  );
};

export default Page;
