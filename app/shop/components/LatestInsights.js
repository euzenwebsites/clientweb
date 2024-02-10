import React from 'react'

const LatestInsights = () => {
  return (
    <div className=' flex flex-col '>

      <div className='w-[100%] '>
        <img src="/assets/img/shops/shop (1).png" />
      </div>


      <div className=''>
        <h3 className='text-xl sm:text-2xl font-bold mt-4'>Daily logo challange for 40 days</h3>
      </div>

      <div className='mt-2  flex flex-col sm:flex-row justify-between max-sm:items-start'>
        <ul className='flex flex-row items-center gap-10 text-gray font-bold max-sm:py-2 text-xs sm:text-lg'>
          <li>30 June 2021</li>
          <li className='border-l border-l-gray pl-2 sm:pl-4'>Business</li>
          <li className='border-l border-l-gray pl-2 sm:pl-4'>Design</li>
        </ul>

      </div>


    </div>
  )
}

export default LatestInsights
