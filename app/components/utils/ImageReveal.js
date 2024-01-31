import React from 'react'
import { RevealWrapper } from 'next-reveal'
const ImageReveal = ({children}) => {
  return (
    <div>
        <RevealWrapper origin='right' delay={300} duration={3000} className=' w-[50%]' >
                {children}
        </RevealWrapper>
      
    </div>
  ) 
}

export default ImageReveal
