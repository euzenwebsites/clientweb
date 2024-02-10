"use client"
import React from 'react'
import { RevealList, RevealWrapper } from 'next-reveal'


const HeroHeading = () => {
  return (
    <div className='sm:w-[100%] flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10'>
      <RevealList interval={70} delay={300} origin='bottom' className=' flex mb-2 sm:mb-4'>

        <h1 className='text-6xl lg:text-[9rem] xl:text-[10rem] font-bold text-black ' >A</h1>
        <h1 className='text-6xl lg:text-[9rem] xl:text-[10rem] font-bold text-black ' >B</h1>
        <h1 className='text-6xl lg:text-[9rem] xl:text-[10rem] font-bold text-black  ' >O</h1>
        <h1 className='text-6xl lg:text-[9rem] xl:text-[10rem] font-bold text-black  ' >U</h1>
        <h1 className='text-6xl lg:text-[9rem] xl:text-[10rem] font-bold text-black ' >T </h1>

      </RevealList>
      <RevealList interval={70} delay={300} origin='bottom' className=' flex flex-row items-start'>
        <h1 className='text-6xl lg:text-[9rem] xl:text-[10rem] font-bold text-black ' >A</h1>
        <h1 className='text-6xl lg:text-[9rem] xl:text-[10rem] font-bold text-black ' >V</h1>
        <h1 className='text-6xl lg:text-[9rem] xl:text-[10rem] font-bold text-black ' >Y</h1>
        <span className='font-extrabold font-black  text-2xl sm:text-4xl pl-4' >®</span>


      </RevealList>
    </div>

  )
}

export default HeroHeading
