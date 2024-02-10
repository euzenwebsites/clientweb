"use client"
import React from 'react'
import { RevealList } from 'next-reveal'
const InsightHeading = () => {
  return ( 
    <div className='flex flex-col sm:flex-row mt-10'>
        <RevealList interval={90} delay={500} origin='bottom' 
       easing='cubic-bezier(0.5, 1, 1, 1)' className='w-[100%] flex flex-row items-start justify-start '>
                        
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black text-height' >I</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black text-height' >N</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black text-height' >S</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black text-height ' >I</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black text-height' >G</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black text-height' >H</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black text-height' >T</h1>
                        <h1 className='text-6xl xl:text-[10rem] 2xl:text-[12.5rem] font-bold text-black text-height' >S</h1>



                         
         </RevealList>
        
    </div>
   
  )
}





export default InsightHeading
