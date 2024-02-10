import React from 'react'
import { ArrowRightOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Reveal from '../utils/Reveal';
import Link from 'next/link';

const AccordionItem = () => {
  return (
    <div className='border-b flex flex-row '>

      <div className='w-[100%] flex flex-col sm:flex-row sm:items-center max-sm:my-4 max-sm:gap-4'>
        <div className=' sm:w-[20%]'>
          <Reveal>
            <p className='text-base sm:text-lg font-medium '>30 June 2023</p>
          </Reveal>
        </div>
        <div className='sm:w-[80%]  '>
          <Reveal>
            <p className='font-bold text-lg sm:text-2xl '>AVY Pruthi, Nuneaton business owner  Coven...</p>
          </Reveal>
        </div>



      </div>

      <div className='border-l w-[10%] items-center justify-center py-2 sm:py-8'>
        <Link href="/insights">
        <ArrowRightOutlined className=' scale-125 pl-4 max-sm:pt-10 sm:pl-10 ' />
        </Link>
      </div>

    </div>
  )
}

export default AccordionItem
