"use client"
import Reveal from './utils/Reveal'
const Service = () => {
  
  return (
    
    <section className='w-[100%] flex  justify-center mt-20 '>
    <div className='w-[90%] flex  flex-col sm:flex-row items-start sm:border-b  ' >

    <div className='sm:sticky top-28 w-[50%] '>
    <div className=' flex flex-row gap-2  '>
        <p className='number-circle'>01</p>
        <p className='font-bold text-6xl'>DESIGN</p>
    </div>
    </div>
    

    <div className='sm:border-l py-4 sm:pl-4 sm:pb-10 sm:w-[50%] w-[100%]' >
      
        <Reveal>
        <div> 
          <h1 className='font-bold text-3xl'>EXHIBITION STAND DESIGN</h1>
          <p className='text-xl font-medium mt-4'>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
        </div> 
        </Reveal>
      
        <Reveal>
        <div className='mt-10'>
          <h1 className='font-bold text-3xl'>EXHIBITION STAND DESIGN</h1>
          <p className='text-xl font-medium mt-4'>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
        </div>
       </Reveal>

       <Reveal>
        <div className='mt-10'>
          <h1 className='font-bold text-3xl'>EXHIBITION STAND DESIGN</h1>
          <p className='text-xl font-medium mt-4'>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
        </div>
        </Reveal>

        <div className='mt-10'>
          <Reveal>
          <h1 className='font-bold text-3xl'>EXHIBITION STAND DESIGN</h1>
          <p className='text-xl font-medium mt-4'>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
          </Reveal>
        </div>                   
    </div>
  
  
  
  </div>
  </section>
  
  )
}

export default Service
