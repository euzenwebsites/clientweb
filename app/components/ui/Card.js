import React from 'react'
import "../../components/stylessheets/About.css"
import Reveal from '../utils/Reveal'

const Card = () => {
  return (

    <div className='border-2 border-gray p-8 flex flex-col w-[100vw] sm:w-[50vw] h-[100vh] sm:h-[450px] ml-10 '>

      <div className='flex flex-row   items-center mb-2 gap-2 '>
        <div className='w-[40%] h-[2px] bg-gray '></div>
        <div><h6 className=' text-gray text-base  uppercase font-bold '>web design</h6></div>
        <div className='w-[40%] h-[2px] bg-gray '></div>
      </div>

      <div>
        <Reveal><h3 className='font-bold text-xl sm:text-5xl'>K FARMAH</h3></Reveal>
        <Reveal><h6 className='text-gray text-lg sm:text-xl mt-2 font-bold'>DENTIST / PRINCIPAL AT HOUSE OF DENTAL</h6></Reveal>
      </div>

      <div className='mt-6 '>
        <Reveal>
          <p className='font-medium '>
            Great service from the team at AVY! Needed help with refreshing an old website and creating a new landing page. Nothing was too much of a hassle for them to sort out and were happy to accommodate my demanding needs. Very responsive to communication and well priced. Overall a flawless experience and will be using this agency again. Thank you to the team at AVY!
          </p>
        </Reveal>

      </div>

    </div>

  )
}

export default Card
