"use client"
import { useMediaQuery } from 'react-responsive'
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const HorizontalScroll = ({children,width}) => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const isSmallScreen = useMediaQuery({ maxWidth: 640 })

  // Map scrollYProgress to translateY transformation
  const x = useTransform(scrollYProgress, [0, 1], ['2%', `${width}%`]);

  // Disable the animation when the screen width is less than or equal to 640px
  const xStyles = isSmallScreen ? { x: 0 } : { x };

  return (
    <>
    <section className="relative h-[150vh]  mt-20 " ref={targetRef}>
      <div className="h-[90vh] sticky top-20 right-20 flex  items-center overflow-hidden ">

        <motion.div style={xStyles}>
          <div className='flex flex-col sm:flex-row  gap-10 w-[100%] items-center'>
          {children}
          </div>
        </motion.div>
      </div>

      
    </section>

    
  </>
  );
};

export default HorizontalScroll;