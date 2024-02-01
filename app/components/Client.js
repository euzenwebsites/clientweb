import React from 'react'
import Reveal from './utils/Reveal'

const Client = () => {
  return (
    <section className='w-[100%] flex justify-center mt-20'>
    <div className="w-[90%] flex flex-row gap-10" >

    <div className='w-[50%] mr-20'>
        <div className='w-[70%]'>
            <p className='font-bold text-black text-5xl'>WHO WE&apos;VE DONE IT FOR</p>
        </div>
                            
        <div className='mt-40 text-gray'>
            <p className='text-base text-xl'>INDUSTRIES:</p>
            <p className='font-bold text-3xl mt-2 leading-normal'>MANUFACTURING F&B TECH  FINTECH FINANCE GAMING HVAC WATER, 
            GAS, & UTILITIES, EDUCATION TRANSPORTATION </p>
        </div>
    </div>

    <div className='w-[100%] sm:w-[50%] leading-normal'>
                            <Reveal>
                            <p className='font-bold text-5xl' >DUBAI EXPO</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-5xl' >BRITISH CHAMBER</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-5xl' >TECH SALARIES</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-5xl' >REVIVEBOT</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-5xl' >CADENT</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-5xl' >ACCUTEMP</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-5xl' >RAILWEIGHT</p>
                            </Reveal>
                            <Reveal>
                            <p className='font-bold text-5xl' >EXACTRAK</p>
                            </Reveal>
                            
    <button className='text-white bg-orange p-4 rounded-full font-bold mt-10 '>
      
      WORK WITH US
      </button>
    </div>
</div>
</section>
  )
}

export default Client
