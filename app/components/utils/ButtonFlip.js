import React from 'react'
import Link from 'next/link'
import "./Animation.css"

const ButtonFlip = ({children}) => {
  return (
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative overflow-hidden"
        onMouseEnter={(e) => {
          const slidingText = e.target.querySelector('.sliding-text');
          slidingText.classList.add('slide-vertical');
        }}
        onMouseLeave={(e) => {
          const slidingText = e.target.querySelector('.sliding-text');
          slidingText.classList.remove('slide-vertical');
        }}
      >
        <span class="btn__text" data-text="For more work send us an email" style="
transition-delay: 0ms;">{children}</span>
      </button>
      
    
  )
}

export default ButtonFlip
