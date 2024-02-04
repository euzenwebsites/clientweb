import React from 'react'
import HowWeDo from './ui/HowWeDo'
import HorizontalScroll from './utils/HorizontalScroll'
import HorizontalScrollSection from './utils/HorizontalScrollSection'

const HowWeDoSec = () => {
  return ( 
    <section className='w-[100%] flex justify-center gap-10 mt-20'>
      <div className='w-[90%] flex items-center' >
        <HorizontalScrollSection>
        {/* <HorizontalScroll width="-10"> */}
          <HowWeDo />
          <img src="/assets/img/line.png" className='h-2 my-auto' ></img>
          <HowWeDo />
          <img src="/assets/img/line.png" className='h-2 my-auto' ></img>
          <HowWeDo />
        {/* </HorizontalScroll> */}
        </HorizontalScrollSection>
      </div>
    </section>
  )
}

export default HowWeDoSec
