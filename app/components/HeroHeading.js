"use client"
import React from 'react'
import { RevealList, RevealWrapper } from 'next-reveal'


const HeroHeading = () => {
  return (
    <div className='sm:w-[100%]'>
        <RevealList interval={70} delay={300}   origin='bottom' className='w-[100%] sm:w-[80%] flex'>
                        
                        <h1 className='text-8xl sm:text-[160px] font-bold text-black text-height' >W</h1>
                        <h1 className='text-8xl sm:text-[160px] font-bold text-black text-height' >E</h1>
                        <h1 className='text-8xl sm:text-[160px] font-bold text-black text-height' >A</h1>
                        <h1 className='text-8xl sm:text-[160px] font-bold text-black text-height' >R</h1>
                        <h1 className='text-8xl sm:text-[160px] font-bold text-black text-height' >E </h1><br></br>
                         
         </RevealList>
         <RevealList interval={70} delay={300}   origin='bottom' className='w-[80%] flex'>
                        <h1 className='text-8xl sm:text-[160px] font-bold text-black text-height' >A</h1>
                        <h1 className='text-8xl sm:text-[160px] font-bold text-black text-height' >V</h1>
                        <h1 className='text-8xl sm:text-[160px] font-bold text-black text-height' >Y</h1>
                        <h1 className='text-8xl sm:text-[160px] font-bold text-black text-height' ><span className='text-4xl' >®</span></h1>
                        
         </RevealList>

      <RevealWrapper origin='left' delay={800} duration={3000} distance='450px' >
        <div className='mb-20'>
          <p className='text-gray text-lg font-bold pr-20 sm:pr-32'>We ignite collaboration with ambitious brands & businesses, marketers, and executives, crafting. Jaw-dropping creative solutions across industries</p>
        </div>
      </RevealWrapper>
    </div>
   
  )
}

export default HeroHeading
