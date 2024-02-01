"use client"
import { useState } from 'react';
import { gsap } from 'gsap';

const ButtonFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipText = () => {
    setIsFlipped(!isFlipped);
    gsap.to('.flip-text', {
      duration: 0.5,
      rotationY: isFlipped ? 0 : 180,
      transformStyle: 'preserve-3d',
    });
  };

  return (
    <button
    className="bg-orange text-white font-bold py-2 px-4 rounded"
    onMouseEnter={flipText}
     onMouseLeave={flipText}
      >
     <span className="flip-text">
       {isFlipped ? 'Flip Text' : 'Original Text'}
       </span>
    

    </button>
  );
};





export default ButtonFlip
