import React from 'react'
import { ArrowRightOutlined, UnorderedListOutlined } from '@ant-design/icons';
const Accordionitem = () => {
  return (
    <div className='border-b flex flex-row  '>
            
            <div className='w-[20%]'>
            <p className='text-xl font-medium '>30 June 2023</p>
            </div>

            <div className='w-[70%]'>
            <p className='font-bold text-4xl py-10'>AVY Pruthi, Nuneaton business owner  Coven...</p>
            </div>
            
            <div className='border-l w-[10%] items-center justify-center'>
                <ArrowRightOutlined className=' scale-125 pl-10 '/>
            </div>

    </div>
  )
}

export default Accordionitem
