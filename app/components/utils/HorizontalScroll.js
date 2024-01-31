"use client"
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';


const HorizontalScroll = ({children}) => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scrollYProgress to translateY transformation
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-55%']);

  return (
    <>
    <section className="relative h-[150vh]  mt-20 " ref={targetRef}>
      <div className="h-[90vh] sticky top-20 right-20 flex  items-center overflow-hidden ">

        <motion.div style={{ x }} >
          <div className='flex  gap-10 w-[100%] items-center'>
          {children}
          </div>
        </motion.div>
      </div>

      
    </section>

    
  </>
  );
};

export default HorizontalScroll;
