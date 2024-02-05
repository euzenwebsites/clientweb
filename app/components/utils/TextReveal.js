// "use client"
// import React, { Children, useEffect } from 'react'
// import gsap from 'gsap-trial'
// import { SplitText } from 'gsap-trial/all'
// import { ScrollTrigger } from 'gsap-trial/all'

// const TextReveal = ({Children}) => {
//   gsap.registerPlugin(SplitText,ScrollTrigger)
//   useEffect(()=>{
//     let mysplitText = new SplitText(".split",{type:'chars'})
//     let chars = mysplitText.chars
//     gsap.from(chars,{
//       yPercent:50,
//       stagger:0.03,
//       ease:"back.in",
//       duration:1.5,
//       scrollTrigger:{
//         trigger:".split",
//         start:"top 80%"
//       }
  
//     }
  
//     )
//   })
  
//   return (
//     <div className='split overflow-hidden'>{Children}</div>
//   )
// }

// export default TextReveal