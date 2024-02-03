import React from 'react'
import { ArrowRightOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Reveal from '../utils/Reveal';

const AccordionItem = () => {
  return (
    <div className='border-b flex flex-row '>

            <div className='w-[100%] flex flex-row'>
            
            
            <div className=' w-[20%]'>
            <Reveal>
            <p className='text-base sm:text-xl font-medium '>30 June 2023</p>
            </Reveal>
            </div>
            

            
            <div className='w-[80%]  '>
            <Reveal>
            <p className='font-bold text-lg sm:text-4xl '>AVY Pruthi, Nuneaton business owner  Coven...</p>
            </Reveal>
            </div>
            

            
            </div>
            
            <div className='border-l w-[10%] items-center justify-center py-2 sm:py-10'>
                <ArrowRightOutlined className=' scale-125 sm:pl-10 '/>
            </div>

    </div>
  )
}

export default AccordionItem
