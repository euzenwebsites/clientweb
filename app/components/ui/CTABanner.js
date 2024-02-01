import React from 'react'
import Reveal from '../utils/Reveal'

const CTABanner = () => {
  return (
    <section className='bg-[#DBDDE2] w-[100%] flex justify-center py-20 mt-20 '>

      <div className='w-[90%]  grid grid-cols-1 sm:grid-cols-2 uppercase'>
        
        <Reveal>
        <div className='text-black font-bold text-2xl sm:text-5xl'>
          <h3 className=''>NOW LETS FIND OUT ABOUT YOU</h3>
        </div>
        </Reveal>

        <div >
          <div className='text-black font-bold text-2xl sm:text-5xl'>
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
          
          <button className='bg-orange p-4 rounded-full text-white font-bold mt-10 uppercase'>start a surway</button>
        </div>

        </div>
    </section>
  )
}

export default CTABanner
