import React from 'react'
import "../../components/stylessheets/About.css"
import Reveal from '../utils/Reveal'

const Card = () => {
  return (

  <div className='border p-8 flex flex-col w-[100vw] sm:w-[40vw] h-[100vh] sm:h-[450px] '>
    <div className='w-[100%] mb-8 flex  flex-row  gap-4'>
      <div className='h-[2px] bg-gray '></div>
      <div><h6 className='text-gray text-lg sm:text-xl uppercase font-bold'>web design</h6></div>
      <div className='h-[2px] bg-gray '></div>
    </div>
    
    <div>
      <Reveal><h3 className='font-bold text-xl sm:text-2xl'>K FARMAH</h3></Reveal>
      <Reveal><h6 className='text-gray text-lg sm:text-xl mt-4 font-bold'>DENTIST / PRINCIPAL AT HOUSE OF DENTAL</h6></Reveal>
    </div>

    <div className='mt-8'>
      <Reveal>
        <p>
        Great service from the team at AVY! Needed help with refreshing an old website and creating a new landing page. Nothing was too much of a hassle for them to sort out and were happy to accommodate my demanding needs. Very responsive to communication and well priced. Overall a flawless experience and will be using this agency again. Thank you to the team at AVY!
        </p>
      </Reveal>
      
    </div>

  </div>

  )
}

export default Card
