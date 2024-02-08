"use client"
import ContactUsBtn from './ui/ContactUsBtn';
import React, { useState } from 'react';
// import { useScroll, useTransform, motion } from 'framer-motion';
import Testimonials from './ui/Testimonials';
import ButtonFlip from './utils/ButtonFlip';
import HorizontalScroll from './utils/HorizontalScroll';
import HorizontalScrollSection from './utils/HorizontalScrollSection';

const TestimonialSec = () => {
  const [showContactUs, setShowContactUs] = useState(false);
  // const targetRef = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  // });

  // // Map scrollYProgress to translateY transformation
  // const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
  <>
  
  <section className='mt-20 mb-10' >
    {/* <HorizontalScroll width="-45"> */}
      <HorizontalScrollSection>
        <Testimonials />
        <Testimonials />
        <Testimonials />
        <Testimonials />
      </HorizontalScrollSection>
      {/* </HorizontalScroll> */}
  </section>

      <div className=" text-center">
        <ContactUsBtn type={true} showContactUs={showContactUs} setShowContactUs={setShowContactUs}
        text="contact us for more work"/>
      </div>

      
</>

  

  );
};

export default TestimonialSec;
