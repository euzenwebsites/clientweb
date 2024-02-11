"use client"
import Reveal from './utils/Reveal'
const Service = () => {

  return (

    <section className='w-[100%] flex  justify-center mt-10 sm:mt-20 '>
      <div className='w-[90%] flex  flex-col sm:flex-row items-start sm:border-b  ' >

        <div className='sm:sticky top-28 w-[50%] '>

          <div className=' flex flex-row gap-4 w-[100%] items-center'>
            <div className='flex items-center justify-center bg-orange rounded-full p-4 w-[50px] h-[50px]'>
              <p className='text-white text-xl font-bold'>01</p>
            </div>
            <p className='font-bold text-4xl sm:text-6xl'>DESIGN</p>
          </div>

        </div>


        <div className='sm:border-l py-2 sm:py-4 sm:pl-4 sm:pb-10 sm:w-[50%] w-[100%] scroll-smooth mt-4' >

          <Reveal>
            <div className='mt-4'>
              <h1 className='font-bold text-xl sm:text-3xl uppercase'>graphics design</h1>
              <p className='text-xl sm:font-medium mt-4'>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
            </div>
          </Reveal>
          <Reveal>
            <div className='mt-4'>
              <h1 className='font-bold text-xl sm:text-3xl uppercase'>graphics design</h1>
              <p className='text-xl sm:font-medium mt-4'>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
            </div>
          </Reveal>

          <Reveal>
            <div className='mt-4'>
              <h1 className='font-bold text-xl sm:text-3xl uppercase'>graphics design</h1>
              <p className='text-xl sm:font-medium mt-4'>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
            </div>
          </Reveal>
          <Reveal>
            <div className='mt-4'>
              <h1 className='font-bold text-xl sm:text-3xl uppercase'>graphics design</h1>
              <p className='text-xl sm:font-medium mt-4'>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
            </div>
          </Reveal>
          <Reveal>
            <div className='mt-4'>
              <h1 className='font-bold text-xl sm:text-3xl uppercase'>graphics design</h1>
              <p className='text-xl sm:font-medium mt-4'>Lörem ipsum diska kehysade. Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
            </div>
          </Reveal>


        </div>



      </div>
    </section>

  )
}

export default Service
