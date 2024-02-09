"use client"
import { RevealWrapper } from 'next-reveal'
import { useRef, useState, useEffect } from 'react'
import React from 'react'
import Header from './ui/Header'
import Image from 'next/image'
import Vector from "../../public//assets/img/bg-vector.png"
import Man from "../../public/assets/img/man.png"
import HeroDes from './HeroDes'
import HeroHeading from './HeroHeading'
const Hero = ({ selectedMenu }) => {

  const [popup, setPopup] = useState(false);
  const [showSmallMenu, setSmallMenu] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

  useEffect(() => {
      setTimeout(() => {
          window.scrollTo(0, 0);
      }, 0);

      // Prevent scrolling during page loading
      document.body.style.overflow = 'hidden';

      // Re-enable scrolling after a short delay
      setTimeout(() => {
          document.body.style.overflow = 'auto';
      }, 100);
      const handleScroll = (e) => {
          const scrollTrigger = document.getElementById("hero_section");
          const triggerPosition = scrollTrigger.getBoundingClientRect().bottom;
          if(triggerPosition <= 0){
              setPopup(true);

          }

          else setPopup(false);
      }
      window.addEventListener("scroll", handleScroll);
  }, [])


  return (
    <div className='w-[100%] sm:h-screen box-border bg-[#dadce1] flex flex-col h-full relative sm:pl-10 '  id='hero_section'>
      <Header type={true} showContactUs={showContactUs} setShowContactUs={setShowContactUs}></Header>

      <div className='flex flex-col sm:flex-row '>

        <div className=" flex flex-col " >
          <HeroHeading />
          <HeroDes />
        </div>


        <RevealWrapper origin='right' delay={800} duration={4000} distance='450px'
          className=' w-[90%] max-sm:h-[60%]  sm:w-[50%] '  >

          <Image src={Vector} height={600} className=' absolute max-sm:hidden right-0 bottom-0  z-5'></Image>
          <Image src={Man} height={700} className=' sm:absolute right-0 bottom-0 z-10' />

        </RevealWrapper>


      </div>
    </div>
  )
}

export default Hero
