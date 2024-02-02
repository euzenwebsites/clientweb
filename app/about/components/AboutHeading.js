"use client"
import React from 'react'
import { RevealList } from 'next-reveal'
const AboutHeading = () => {
  return ( 
    <div className='flex flex-col sm:flex-row '>
        <RevealList interval={80} delay={500} origin='bottom' className='w-[80%] flex'>
                        
                        <h1 className='text-7xl sm:text-[160px] font-bold text-black text-height' >A</h1>
                        <h1 className='text-7xl sm:text-[160px] font-bold text-black text-height' >B</h1>
                        <h1 className='text-7xl sm:text-[160px] font-bold text-black text-height' >O</h1>
                        <h1 className='text-7xl sm:text-[160px] font-bold text-black text-height' >U</h1>
                        <h1 className='text-7xl sm:text-[160px] font-bold text-black text-height' >T</h1>
                         
         </RevealList>
         <RevealList interval={80} delay={500} origin='bottom' className='w-[80%] flex'>
                        
                        <h1 className='text-7xl sm:text-[160px] font-bold text-black text-height' >A</h1>
                        <h1 className='text-7xl sm:text-[160px] font-bold text-black text-height' >N</h1>
                        <h1 className='text-7xl sm:text-[160px] font-bold text-black text-height' >V</h1>
                        <h1 className='text-7xl sm:text-[160px] font-bold text-black text-height' ><span className='text-4xl' >®</span></h1>


                         
         </RevealList>
        
    </div>
   
  )
}

export default AboutHeading
