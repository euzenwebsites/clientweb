import React from 'react'
import Link from 'next/link'
import "./Animation.css"

const ButtonFlip = () => {
  return (
    <div>
      <Link href="/" class="button">
      <div class="qube">
         <div class="front">mouse over me!</div>
         <div class="back">mouse over me!</div>
      </div>
   </Link>
    </div>
  )
}

export default ButtonFlip
