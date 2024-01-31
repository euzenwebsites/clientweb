"use client"
import React from 'react'
import { RevealList } from 'next-reveal'
const HeroHeading = () => {
  return (
    <div>
        <RevealList interval={80} delay={500} origin='bottom' className='w-[80%] flex'>
                        
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>W</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>E</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>A</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>R</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>E </h1><br></br>
                         
         </RevealList>
         <RevealList interval={80} delay={700} origin='bottom' className='w-[80%] flex'>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>A</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>V</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}>Y</h1>
                        <h1 className='text-[150px] font-bold text-black ' style={{lineHeight:"7rem"}}><span className='text-xl' >®</span></h1>
                        
         </RevealList>
    </div>
   
  )
}

export default HeroHeading
