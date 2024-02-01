import React from 'react'
import { ArrowRightOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Reveal from '../utils/Reveal';

const AccordionItem = () => {
  return (
    <div className='border-b flex flex-row '>
            <div>
            <Reveal>
            <div className='w-[20%] py-2 sm:py-10'>
            <p className='text-base sm:text-xl font-medium '>30 June 2023</p>
            </div>
            
            
            <div className='w-[100%] sm:w-[70%] py-2 sm:py-10'>
            <p className='font-bold text-lg sm:text-4xl '>AVY Pruthi, Nuneaton business owner  Coven...</p>
            </div>
            </Reveal>
            </div>
            
            <div className='border-l w-[10%] items-center justify-center py-2 sm:py-10'>
                <ArrowRightOutlined className=' scale-125 pl-10 '/>
            </div>

    </div>
  )
}

export default AccordionItem
