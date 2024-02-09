"use client"
import React from 'react'
import { RevealList, RevealWrapper } from 'next-reveal'


const HeroHeading = () => {
  return (
    <div className='sm:w-[100%] max-sm:py-4 max-sm:p-8'>
      <RevealList interval={70} delay={300} origin='bottom' className='w-[100%] sm:w-[80%] flex'>

        <h1 className='text-6xl sm:text-[9.5rem] font-bold text-black text-height' >W</h1>
        <h1 className='text-6xl sm:text-[9.5rem] font-bold text-black text-height' >E</h1>
        <h1 className='text-6xl sm:text-[9.5rem] font-bold text-black text-height ml-8' >A</h1>
        <h1 className='text-6xl sm:text-[9.5rem] font-bold text-black text-height ml-2' >R</h1>
        <h1 className='text-6xl sm:text-[9.5rem] font-bold text-black text-height' >E </h1><br></br>

      </RevealList>
      <RevealList interval={70} delay={300} origin='bottom' className='w-[80%] flex flex-row'>
        <h1 className='text-6xl sm:text-[9.5rem] font-bold text-black text-height' >A</h1>
        <h1 className='text-6xl sm:text-[9.5rem] font-bold text-black text-height' >V</h1>
        <h1 className='text-6xl sm:text-[9.5rem] font-bold text-black text-height' >Y</h1>
        <span className='font-extrabold text-black text-height text-2xl sm:text-4xl sm:pt-4 sm:pl-4' >®</span>


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
