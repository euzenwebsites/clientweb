import React from 'react'
import Testimonials from './ui/Testimonials'

const TestimonialSec = () => {
  return (
    <section className="w-[100%] flex flex-col justify-center items-center mt-20">
        <div className='w-[90%] flex flex-row'   id="think_div">
                        <Testimonials/>
                        <Testimonials/>
                        <Testimonials/>
                          
          </div>
        
        <div className='mt-10'>
              <button className='bg-orange p-4 rounded-full uppercase text-white font-semibold'>contact us for more work</button>
        </div>
    </section>
  )
}

export default TestimonialSec
