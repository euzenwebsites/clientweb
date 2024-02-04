import React from 'react'
import Link from 'next/link'
import "./Animation.css"

const ButtonFlip = (props) => {
  return (
    <span class="slideout-anim-wrap blue" >
  <span class="slide-anim-text">
    {props.text}
  </span>
  <span>
  {props.text}
  </span>
</span>
      
    
  )
}

export default ButtonFlip
