"use client"
import React from 'react'
import { RevealList } from 'next-reveal'
const WorkHeading = () => {
  return ( 
    <div className='flex flex-col sm:flex-row mt-10'>
        <RevealList interval={90} delay={500} origin='bottom' 
       easing='cubic-bezier(0.5, 1, 1, 1)' className='w-[100%] flex flex-row items-start justify-start '>
                        
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >O</h1>
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >U</h1>
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >R</h1>
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height ml-4' >W</h1>
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >O</h1>
                      
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >R</h1>
                        <h1 className='text-6xl  sm:text-[12.5rem] font-bold text-black text-height' >K</h1>


                         
         </RevealList>
        
    </div>
   
  )
}



export default WorkHeading
