"use client"
import React from 'react'
import { RevealList, RevealWrapper } from 'next-reveal'


const InsightHeading = () => { 
  return (
    <div className='w-[100%] max-sm:py-4 max-sm:p-8 '>
        <RevealList interval={70} delay={300}   origin='bottom' className='w-[100%] sm:w-[80%] flex'>   
                        <h1 className='text-4xl md:text-[10.5rem] sm:text-8xl font-bold text-black text-height' >I</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height' >N</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height ' >S</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height ' >I</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height' >G</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height' >H</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height' >T</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height' >S</h1>

         </RevealList>
    </div>
   
  )
}

export default InsightHeading
