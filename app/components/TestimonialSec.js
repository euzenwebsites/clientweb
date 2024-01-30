"use client"
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Testimonials from './ui/Testimonials';

const TestimonialSec = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scrollYProgress to translateY transformation
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <>
    <section className="relative h-[300vh]  mt-20 " ref={targetRef}>
      <div className="sticky top-20 flex h-[90vh] items-center overflow-hidden ">

        <motion.div style={{ x }} className='flex w-[100%]'>
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
          
          
        </motion.div>
      </div>

      
    </section>

    <div className="mt-10">
    <button className="bg-orange p-4 rounded-full uppercase text-white font-semibold">
      contact us for more work
    </button>
  </div>
  </>
  );
};

export default TestimonialSec;
