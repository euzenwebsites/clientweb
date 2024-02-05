import React from 'react'
import Reveal from './utils/Reveal'

const CEOSec = () => {
  return (
    <section className='w-[100%] flex justify-center mt-20'>
      <div className="w-[90%] grid sm:grid-cols-2 grid-cols-1 gap-10" >
        <Reveal>
          <div >
            <p className='font-bold text-3xl md:text-4xl sm:text-5xl sm:leading-normal'>
               &quot;THE DIFFERENCE BETWEEN ORDINARY AND EXTRAORDINARY IS THAT LITTLE EXTRA. &quot;</p>
            <p className='text-xl text-[#727272] mt-2' >- JIMMY JOHNSON</p>
          </div>
        </Reveal>
        <div className='text-xl font-medium'>
         
            <p >We transform your ideas into reality through cutting-edge design, branding,
              and motion. We&apos;re not just experts; we&apos;re passionate strategists and visionary storytellers
              committed to excellence.
              <br></br><br></br>
              Our collaborative ethos thrives in today&apos;s creative landscape, serving startups and enterprises.
              <br></br><br></br>

              Let&apos;s embark on your creative journey to happiness together.</p>
        
        </div>
      </div>
    </section>
  )
}

export default CEOSec
