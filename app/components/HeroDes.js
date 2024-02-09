"use client"
import React from 'react'
import { RevealWrapper } from 'next-reveal'
const HeroDes = () => {
  return (


    <div className="w-[80%] max-sm:hidden" >


      <RevealWrapper origin='left' delay={800} duration={3000} distance='450px' >
        <div className='pb-16'>
          <h2 className='text-gray pb-6 border-b-2 border-b-gray font-bold '>CORE SERVICES :</h2>

          <div className='flex justify-between items-center border-b-2 py-2 border-b-gray'>
            <p className='font-bold text-black padding-10  text-xl'>Design</p>
            <p className='text-orange font-bold text-lg'>01</p>
          </div>
          <div className='flex justify-between items-center border-b-2 py-2 border-b-gray'>
            <p className='font-bold text-black padding-10  text-xl'>Brand Strategy</p>
            <p className='text-orange font-bold text-lg'>02</p>
          </div>
          <div className='flex justify-between items-center border-b-2 py-2 border-b-gray'>
            <p className='font-bold text-black padding-10  text-xl'>Motion Design & Animation</p>
            <p className='text-orange font-bold text-lg'>03</p>
          </div>
        </div>
      </RevealWrapper>

    </div>

  )
}

export default HeroDes
