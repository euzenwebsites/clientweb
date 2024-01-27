import React from 'react'

const CTABanner = () => {
  return (
    <section className='bg-[#DBDDE2] w-[100%] flex justify-center py-20 mt-20 '>

      <div className='w-[90%]  grid grid-cols-2 uppercase'>
        
        <div className='text-black font-bold text-5xl'>
          <h3 className=''>NOW LETS FIND OUT ABOUT YOU</h3>
        </div>

        <div >
          <div className='text-black font-bold text-5xl'>
          <h3>lorem ipsum</h3>
          <h3>lorem ipsum</h3>
          <h3>lorem ipsum</h3>
          </div>
          
          <button className='bg-orange p-4 rounded-full text-white font-bold mt-10 uppercase'>start a surway</button>
        </div>

        </div>
    </section>
  )
}

export default CTABanner
