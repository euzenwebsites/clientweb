import React from 'react'
import "../../components/stylessheets/About.css"
import { Row, Col } from "antd"
import Reveal from '../utils/Reveal'
const PhilosophyItem = (props) => {
  return (
    
    
    <div className='flex items-start flex-row border-b pt-8 pb-12' >

    
    <div className='flex flex-row items-center gap-2  sticky top-0 w-[50%]'>
        <p className='number-circle'>{props.number}</p>
        <p className='font-bold text-4xl'>{props.heading}</p>
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
