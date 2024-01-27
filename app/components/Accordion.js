import React from 'react'
import AccordionItem from './ui/AccordionItem.js'


const Accordion = () => {
  return (
    <section className='w-[100%] flex justify-center mt-20'>
    <div className='w-[90%]'>
    <h3 className='font-bold text-7xl mb-20'>INSIGHTS</h3>
        <div>
            <AccordionItem/>
            <AccordionItem/>
            <AccordionItem/>
            <AccordionItem/>

        </div>
                        
        <div className='mt-10 flex justify-center'>
            <button className='bg-orange p-4 font-bold text-white rounded-full '>READ MORE</button>
                            
        </div>

    </div>
    </section>
  )
}

export default Accordion
