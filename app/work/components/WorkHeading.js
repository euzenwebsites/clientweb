"use client"
import React from 'react'
import { RevealList, RevealWrapper } from 'next-reveal'


const WorkHeading = () => { 
  return (
    <div className='sm:w-[100%] max-sm:py-4 max-sm:p-8'>
        <RevealList interval={70} delay={300}   origin='bottom' className='w-[100%] sm:w-[80%] flex'>   
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height' >O</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height' >U</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height ' >R</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height ml-2' >W</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height' >O </h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height' >R</h1>
                        <h1 className='text-4xl sm:text-[10.5rem] font-bold text-black text-height' >K</h1>

         </RevealList>
    </div>
   
  )
}

export default WorkHeading
