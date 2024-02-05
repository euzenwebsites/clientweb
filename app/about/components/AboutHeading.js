"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap-trial'
import { SplitText } from 'gsap-trial/all'
import { ScrollTrigger } from 'gsap-trial/all'

const AboutHeading = () => { 
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
      <h1 className='text-6xl sm:text-[148px] font-bold text-black text-height uppercase animate overflow-hidden' >About avy
      </h1>
      <span className='font-extrabold text-black text-height text-4xl sm:text-5xl ml-2' >®</span>
      </div>
                        
                        
                        
    
    </div>
   
  )
}



export default AboutHeading
