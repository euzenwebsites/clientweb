"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const HorizontalScrollSection = ({children}) => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    const pin = gsap.fromTo(sectionRef.current,{
      translateX:0
    },{
      translateX:"-80vw",
      ease:"none",
      duration:1,
      scrollTrigger:{
        trigger:triggerRef.current,
        start:"top top",
        end:"2000 top",
        scrub:0.6,
        pin:true,
      }
    })
    return  ()=>{
      	pin.kill()
    }
  },[])
  return (
    <section className="mt-10 ml-10 overflow-hidden ">
      <div ref={triggerRef}>
        <div ref={sectionRef} className=" h-[100vh] w-[300vw] mt-10 flex flexcol sm:flex-row gap-10 relative">
        {/* <div className=" h-[100vh] w-[100vw] flex items-center justify-center">
              <h1>section 2</h1>
          </div> */}
         {children}
          
        </div>
      </div>
    </section>
  )
}

export default HorizontalScrollSection