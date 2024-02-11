"use client"
import React from 'react'
import { RevealList, RevealWrapper } from 'next-reveal'


const HeroHeading = () => {
  return (
    <div className='sm:w-[100%]  max-sm:pl-8 max-sm:pt-8 gap-2 sm:gap-4'>
      <RevealList interval={70} delay={300} origin='bottom' className=' flex mb-2 sm:mb-4'>

        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >W</h1>
        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >E</h1>
        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black  ml-4' >A</h1>
        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black  ' >R</h1>
        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >E </h1><br></br>

      </RevealList>
      <RevealList interval={70} delay={300} origin='bottom' className=' flex flex-row items-start'>
        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >A</h1>
        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >V</h1>
        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >Y</h1>
        <span className='font-extrabold font-black  text-2xl sm:text-4xl pl-4' >®</span>


      </RevealList>

      <RevealWrapper origin='left' delay={800} duration={3000} distance='450px' >
        <div className='mb-12 mt-4 pr-16 sm:pr-40'>
          <p className='text-gray text-lg font-bold  sm:pr-44'>
            We ignite collaboration with ambitious brands & businesses, marketers, and executives, crafting. Jaw-dropping creative solutions across industries</p>
        </div>
      </RevealWrapper>
    </div>

  )
}

export default HeroHeading
