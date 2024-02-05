"use client"
import React from 'react'
import Reveal from '../utils/Reveal'
import ButtonFlip from '../utils/ButtonFlip'
import ContactUsBtn from './ContactUsBtn'
import { useState } from 'react'
const CTABanner = () => {
  const [showContactUs, setShowContactUs] = useState(false);

  return (
    <section className='bg-[#DBDDE2] w-[100%] flex justify-center py-20 mt-20 '>

      <div className='w-[90%]  grid grid-cols-1 sm:grid-cols-2 gap-8 uppercase'>
        
        <Reveal>
        <div className='text-black font-bold text-2xl sm:text-4xl'>
          <h3 className=''>NOW LETS FIND OUT ABOUT YOU</h3>
        </div>
        </Reveal>

        <div >
          <div className='text-black font-bold text-2xl sm:text-4xl'>
            <Reveal>
          <h3>lorem ipsum</h3>
          </Reveal>
          <Reveal>
          <h3>lorem ipsum</h3>
          </Reveal>
          <Reveal>
          <h3>lorem ipsum</h3>
          </Reveal>
          </div>

          <div>
          <ContactUsBtn type={true} showContactUs={showContactUs} setShowContactUs={setShowContactUs}
        text="start a surway"/>
          </div>

        </div>

        </div>
    </section>
  )
}

export default CTABanner
