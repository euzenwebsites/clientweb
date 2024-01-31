"use client"
import React from 'react'
import { RevealList } from 'next-reveal'
const AboutHeading = () => {
  return (
    <div>
        <RevealList interval={80} delay={500} origin='bottom' className='w-[80%] flex'>
                        
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>A</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>B</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>O</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>U</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>T</h1>
                         
         </RevealList>
         <RevealList interval={80} delay={500} origin='bottom' className='w-[80%] flex'>
                        
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>E</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>N</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>V</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}><span className='text-4xl' >®</span></h1>


                         
         </RevealList>
        
    </div>
   
  )
}

export default AboutHeading
