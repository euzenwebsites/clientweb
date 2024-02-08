import React from 'react'
import Reveal from '../utils/Reveal'

const HowWeDo = () => {
  return (
    
    <div className='w-[100vw] sm:w-[25vw] flex flex-col gap-4 justify-center'> 

        <div className='border p-8 flex flex-col items-center justify-center gap-8'>
            <img src="/assets/img/Research.svg" ></img>
            <Reveal>
            <h3 className='font-bold text-5xl text-black'>RESEARCH</h3>
            </Reveal>
        </div>
        
        <div className='text-black p-4 text-center'>
          <Reveal>
          <p >Lörem ipsum diska ehysade.ska ehysade. Bedåv köktigt. Såna ska ehysade. Bedåv köktigt. Såna  Bedåv köktigt. Såna belingar håligen för att besk och nybitev. </p>
          </Reveal>
        </div>

    </div>

  )
}

export default HowWeDo
