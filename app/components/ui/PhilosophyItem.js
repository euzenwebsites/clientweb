import React from 'react'
import "../../components/stylessheets/About.css"
import { Row, Col } from "antd"
import Reveal from '../utils/Reveal'
const PhilosophyItem = (props) => {
  return (


    <div className='flex items-start flex-col sm:flex-row border-b pt-8 pb-12' >


      <div className='flex flex-row items-center gap-4   sm:w-[50%]'>

        <div className='flex items-center justify-center bg-orange rounded-full p-4 sm:p-8 w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]'>
          <p className='text-white text-xl sm:text-3xl font-bold'>{props.number}</p>
        </div>

        <p className='font-bold text-xl sm:text-5xl'>{props.heading}</p>
      </div>


      <div className=' pl-4  sm:w-[50%] w-[100%]' >

        <div>
          <Reveal>
            <p className='text-xl font-medium mt-4'>{props.description}</p>
          </Reveal>
        </div>

      </div>

    </div>


  )
}

export default PhilosophyItem
