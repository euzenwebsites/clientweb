import React from 'react'
import AccordionItem from './ui/AccordionItem.js'
import ButtonFlip from './utils/ButtonFlip.js'
import Link from 'next/link.js'

const Accordion = () => {
  return (
    <section className='w-[100%] flex justify-center mt-20'>
    <div className='w-[90%] '>
    <h3 className='font-bold text-4xl sm:text-7xl mb-20'>INSIGHTS</h3>
        <div>
            <AccordionItem/>
            <AccordionItem/>
            <AccordionItem/>
            <AccordionItem/>

        </div>
        <div className='w-[100%] flex justify-center'>
        <div className='mt-10  w-[10%] flex justify-center'>
          <Link href="/insights" className='w-full flex justify-center '>
          <ButtonFlip text="READ MORE" />   
          </Link>                         
        </div>
        </div> 

    </div>
    </section>
  )
}

export default Accordion
