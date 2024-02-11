"use client"
import React from 'react'
import { RevealList } from 'next-reveal'
const WorkHeading = () => {
  return ( 
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 mt-10'>
        <RevealList interval={90} delay={500} origin='bottom' 
       easing='cubic-bezier(0.5, 1, 1, 1)' className=' flex flex-row '>
                        
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >O</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >U</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >R</h1>
         </RevealList>
         <RevealList interval={90} delay={500} origin='bottom' 
       easing='cubic-bezier(0.5, 1, 1, 1)' className=' flex flex-row '>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black  ' >W</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >O</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >R</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black ' >K</h1>
         </RevealList>
        
    </div>
   
  )
}



export default WorkHeading
