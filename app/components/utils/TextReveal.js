import React, { Children } from 'react'
import { gsap } from 'gsap'
import SplitType from 'split-type'

const TextReveal = ({Children}) => {
    const ourText = SplitType.create('p.our-text', { types: 'chars' })
    const chars = ourText.chars
    gsap.fromTo(
        chars,
        { 
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: 'power4.out',
        }
      )
  return (
    <div className='our-text'>
      {Children}
    </div>
  )
}

export default TextReveal
