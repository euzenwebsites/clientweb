// "use client"
// import React, { useRef } from 'react';
// import { useScroll, useTransform, motion } from 'framer-motion';
import Testimonials from './ui/Testimonials';
import ButtonFlip from './utils/ButtonFlip';
import HorizontalScroll from './utils/HorizontalScroll';


const TestimonialSec = () => {
  // const targetRef = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  // });

  // // Map scrollYProgress to translateY transformation
  // const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    
    <section className=''>
    <div>
      <HorizontalScroll width="-55">
        
        <Testimonials />
        <Testimonials />
        <Testimonials />
        <Testimonials />
       
      </HorizontalScroll>
    </div>
    
    <div className="mt-10">

  

    <button className="bg-orange p-4 rounded-full uppercase text-white font-semibold">
      contact us for more work
    </button>
    
  </div>
  </section>

  

  );
};

export default TestimonialSec;
