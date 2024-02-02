import React from 'react'
import { ArrowRightOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Reveal from '../utils/Reveal';

const AccordionItem = () => {
  return (
    <div className='border-b flex flex-row '>

            <div className='w-[90%] flex flex-row'>
            
            <Reveal>
            <div className=' w-[20%]'>
            <p className='text-base sm:text-xl font-medium '>30 June 2023</p>
            </div>
            </Reveal>

            <Reveal>
            <div className='w-[80%]  '>
            <p className='font-bold text-lg sm:text-4xl '>AVY Pruthi, Nuneaton business owner  Coven...</p>
            </div>
            </Reveal>

            
            </div>
            
            <div className='border-l w-[10%] items-center justify-center py-2 sm:py-10'>
                <ArrowRightOutlined className=' scale-125 sm:pl-10 '/>
            </div>

    </div>
  )
}

export default AccordionItem
