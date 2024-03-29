"use client"
import React from 'react'
import Reveal from './utils/Reveal'
import ContactUsBtn from './ui/ContactUsBtn'
import { useState } from 'react'

const Client = () => {
  const [showContactUs, setShowContactUs] = useState(false);

  return (
    <section className='w-[100%] flex justify-center mt-10 sm:mt-20'>
    <div className="w-[90%] flex flex-col sm:flex-row gap-10" >

    <div className='w-[100%] sm:w-[50%] mr-20'>
        <div className='w-full sm:w-[70%]'>
        <Reveal>
            <p className='font-bold text-black text-2xl sm:text-5xl'>WHO WE&apos;VE DONE IT FOR</p>
            </Reveal>
        </div>
                            
        <div className='mt-2 mt-10 sm:mt-40 text-gray'>
            <p className='text-base text-xl'>INDUSTRIES:</p>
            <Reveal>
            <p className='font-bold text-xl sm:text-3xl mt-2 sm:leading-normal'>MANUFACTURING F&B TECH  FINTECH FINANCE GAMING HVAC WATER, 
            GAS, & UTILITIES, EDUCATION TRANSPORTATION </p></Reveal>
        </div>
    </div>

    <div className='w-[100%] sm:w-[50%] flex flex-col gap-4'>
                            <Reveal>
                            <p className='font-bold text-2xl sm:text-5xl' >DUBAI EXPO</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-2xl sm:text-5xl' >BRITISH CHAMBER</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-2xl sm:text-5xl' >TECH SALARIES</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-2xl sm:text-5xl' >REVIVEBOT</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-2xl sm:text-5xl' >CADENT</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-2xl sm:text-5xl' >ACCUTEMP</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-2xl sm:text-5xl' >RAILWEIGHT</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-2xl sm:text-5xl' >EXACTRAK</p>
                            </Reveal>
                            
    
      <ContactUsBtn type={true} showContactUs={showContactUs} setShowContactUs={setShowContactUs}
        text=" WORK WITH US"/>
    </div>
</div>
</section>
  )
}

export default Client
