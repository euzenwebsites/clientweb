"use client"
import { useEffect,useRef } from "react"
import { useInView,useAnimation, motion } from "framer-motion"

const Reveal = ({children}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})
    const mainControls = useAnimation()
  
    useEffect(()=>{
      console.log("the page is rendring")
  
        if(isInView){
          mainControls.start("visible")
        }
    },[isInView])

  return (
    <div ref={ref} style={{position:"relative ", overflow:"hidden", width:"100%"}}>
      <motion.div
      variants={{
        hidden: {opacity:0, y:90},
        visible: {opacity:1, y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.75,delay:0.70}}
      >
        {children}
        </motion.div>
    </div>
  )
}

export default Reveal
