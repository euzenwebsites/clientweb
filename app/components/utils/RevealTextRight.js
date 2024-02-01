"use client"
import { useEffect,useRef } from "react"
import { useInView,useAnimation, motion } from "framer-motion"

const RevealTextRight = ({children}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})
    const mainControls = useAnimation()
    // const slideControls = useAnimation()
  
    useEffect(()=>{
        console.log("the animation is triggered")

        if(isInView){
            mainControls.start("visible")
            // slideControls.start("visible")
        }
    },[isInView])

  return (
    <div ref={ref}  style={{position:"relative",width:"100%",overflow:"hidden",margin:"0"}} >
        <motion.div
      variants={{
        hidden: {opacity:0, x:0},
        visible: {opacity:1, x:-100},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration:2,delay:0.50}}
      >
        {children}

    </motion.div>
      {/* <motion.div
      variants={{
        hidden: {left:0},
        visible: {left:"100%"},
      }}
      initial="hidden"
      animate={slideControls}
      transition={{duration:0.9,ease:"easeIn"}}
      style={{
        position:"absolute",
        top:4,
        bottom:4,
        left:0,
        right:0,
        background:"#DBDDE2",
        zIndex:20,
      }}
      /> */}
        
    </div>
  )
}


export default RevealTextRight
