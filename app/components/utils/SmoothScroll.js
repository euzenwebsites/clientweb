"use client"
import { useEffect, useRef } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'


function SmoothScroll({children}) {
  const lenis = useLenis(({ scroll}) => {
    console.log(scroll)

  })
  const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => {
      gsap.ticker.remove(update)
    }
  })

  return (
    <ReactLenis  root options={{
      lerp:0.1,
      duration:1.7,
      smoothWheel:true,
      

    }}>
          {children}
    </ReactLenis>
  )
}

export default SmoothScroll
