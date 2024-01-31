"use client"
import { useEffect, useRef } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'

function SmoothScroll() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
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
    <ReactLenis root>
      { /* content */ }
    </ReactLenis>
  )
}

export default SmoothScroll
