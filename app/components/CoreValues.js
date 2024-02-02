"use client"
import React from 'react'
import { RevealWrapper } from  'next-reveal'
const CoreValues = () => {
  return (

    <section className='w-[100%] flex justify-center mt-20'>
    <div className='w-[90%] sm:hidden'>
   
    

    <RevealWrapper origin='left' delay={800} duration={3000} distance='450px' >
    <div className='pb-10'>
            <h2 className='text-gray pb-10 border-b border-b-gray-500 font-bold '>CORE SERVICES :</h2>
                            <div className='flex justify-between border-b py-2 border-b-gray-500'>
                                <p className='font-semibold text-black padding-10  text-2xl'>Design</p>
                                <p className='text-orange font-bold'>01</p>
                            </div>
                            <div className='flex justify-between border-b py-2 border-b-gray-500'>
                                <p className='font-semibold text-black padding-10  text-2xl'>Brand Strategy</p>
                                <p className='text-orange font-bold'>02</p>
                            </div>
                            <div className='flex justify-between border-b py-2 border-b-gray-500'>
                                <p className='font-semibold text-black padding-10  text-2xl'>Motion Design & Animation</p>
                                <p className='text-orange font-bold'>03</p>
                            </div>
    </div>
    </RevealWrapper>

    </div>
    </section>
  
  )
}

export default CoreValues
