"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap-trial'
import { SplitText } from 'gsap-trial/all'
import { ScrollTrigger } from 'gsap-trial/all'
import { RevealWrapper } from 'next-reveal'

const HeroHeading = () => { 
  gsap.registerPlugin(SplitText,ScrollTrigger)
  useEffect(()=>{
    let mysplitText = new SplitText(".animate",{type:'chars'})
    let chars = mysplitText.chars
    gsap.from(chars,{
      yPercent:120,
      stagger:0.05,
      ease:"cric.in",
      duration:0.9,
      scrollTrigger:{
        trigger:".animate",
        
      }
  
    }
  
    )
  })
  return (
    <div className='sm:w-[100%] max-sm:py-4 max-sm:p-8'>

      <div className='split1 overflow-hidden flex items-start justify-start'>
      <h1 className='text-6xl sm:text-[148px] font-bold text-black text-height uppercase animate overflow-hidden' >We are
      <br></br> avy</h1>
    <span className='font-extrabold text-black text-height text-4xl sm:text-5xl pl-4' >®</span>
      
      </div>
                        
                        
                        
         

      <RevealWrapper origin='left' delay={800} duration={3000} distance='450px' >
        <div className='mb-20 mt-4 pr-20 sm:pr-40'>  
          <p className='text-gray text-base sm:text-lg font-bold sm:pr-44'>We ignite collaboration with ambitious brands & businesses, marketers, and executives, crafting. Jaw-dropping creative solutions across industries</p>
        </div>
      </RevealWrapper>
    </div>
   
  )
}

export default HeroHeading
