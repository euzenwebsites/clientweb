"use client"
import React from 'react'
import { RevealWrapper } from  'next-reveal'
const HeroDes = () => {
  return (

    <RevealWrapper origin='left' delay={300} duration={3000}>
    <div className="w-[80%]" >
    <div className='mb-20'>
        <p className='text-gray text-lg font-bold pr-32'>We ignite collaboration with ambitious brands & businesses, marketers, and executives, crafting. Jaw-dropping creative solutions across industries</p>
    </div>

    <div>
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
                        </div>
    </RevealWrapper>
  )
}

export default HeroDes
