import React from 'react'

const Testimonials = () => {
  return (
    <div className='border p-6 sm:p-10 flex flex-col gap-8 sm:gap-12   sm:w-[40vw]   styicky left-28 mb-10 box-border' >

        <div className='flex flex-col gap-4 sm:gap-8'>
        <div className='flex items-center justify-center bg-orange rounded-full p-4 w-[50px] h-[50px]'>
        <p className='text-white text-2xl font-bold'>01</p>
        </div>
        <h3 className='font-bold text-xl sm:text-3xl text-black'>Lörem ipsum rilåning ångerrösta teraning, i rerina mudöl: fasade. Du kan vara drabbad?</h3>
        <p className='text-gray font-bold'>Lorem Ipsum</p>
        </div>  

        <div className='font-bold text-black'>
        <p >Client</p>
        <p className='mt-2'>Lorem Ipsum</p>
        </div>
    </div>
  )  
}

export default Testimonials
