"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const HorizontalScrollSection = ({ children,width }) => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 640px)", () => {
      const pin = gsap.fromTo(sectionRef.current, {
        translateX: 0,
      }, {
        translateX: `-${width || 'defaultWidth'}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
        },
      })
      return () => {
        pin.kill()
      }
    })

    return () => {
      mm.revert()
    }
  }, [])

  return (
    <section className="  overflow-hidden px-4">
      <div ref={triggerRef}>
        <div ref={sectionRef} className=" sm:h-[90vh] sm:w-[170vw] sm:ml-20 sm:mt-36   flex flex-col sm:flex-row   relative">
        
         {children}
          
        </div>
      </div>
    </section>
  )
}

export default HorizontalScrollSection