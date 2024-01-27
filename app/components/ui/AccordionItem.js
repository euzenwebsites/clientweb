import React from 'react'
import { ArrowRightOutlined, UnorderedListOutlined } from '@ant-design/icons';

const AccordionItem = () => {
  return (
    <div className='border-b flex flex-row  '>
            
            <div className='w-[20%] py-10'>
            <p className='text-xl font-medium '>30 June 2023</p>
            </div>

            <div className='w-[70%] py-10'>
            <p className='font-bold text-4xl '>AVY Pruthi, Nuneaton business owner  Coven...</p>
            </div>
            
            <div className='border-l w-[10%] items-center justify-center py-10'>
                <ArrowRightOutlined className=' scale-125 pl-10 '/>
            </div>

    </div>
  )
}

export default AccordionItem
