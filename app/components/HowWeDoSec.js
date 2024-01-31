import React from 'react'
import HowWeDo from './ui/HowWeDo'
import HorizontalScroll from './utils/HorizontalScroll'

const HowWeDoSec = () => {
  return ( 
    <section className='w-[100%] flex justify-center gap-10 mt-20'>
      <div className='w-[90%] flex items-center' >
        <HorizontalScroll>
          <HowWeDo />
          <img src="/assets/img/line.png" className='h-2' ></img>
          <HowWeDo />
          <img src="/assets/img/line.png" className='h-2' ></img>
          <HowWeDo />
        </HorizontalScroll>
      </div>
    </section>
  )
}

export default HowWeDoSec
