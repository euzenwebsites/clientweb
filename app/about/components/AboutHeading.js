"use client"
import React from 'react'
import { RevealList } from 'next-reveal'
const AboutHeading = () => {
  return ( 
    <div className='flex flex-col sm:flex-row mt-10'>
        <RevealList interval={90} delay={500} origin='bottom' 
       easing='cubic-bezier(0.5, 1, 1, 1)' className='w-[100%] flex flex-row items-start justify-start overflow-hidden'>
                        
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >A</h1>
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >B</h1>
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >O</h1>
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >U</h1>
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >T</h1>
                      
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >A</h1>
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >N</h1>
                        <h1 className='text-6xl   sm:text-[12.5rem] font-bold text-black text-height' >Y</h1>
                          <span className='text-5xl font-bold text-black  pl-4 ' >®</span>


                         
         </RevealList>
        
    </div>
   
  )
}

export default AboutHeading
