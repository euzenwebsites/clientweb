import RevealSlide from "../utils/RevealSlide"

const LeftHeading = (props) => {
  
 

  return (
    <section className='w-[100%] flex justify-center ' >
    <div  className='left-heading__banner w-[90%] ' >

  
            
             
              <div className="left-heading__banner-inner ">
              <RevealSlide>
              <h3 className="heading-left"> {props.heading}</h3>
              </RevealSlide>
              </div>
              
            
            
    </div> 
    </section> 
  )
}

export default LeftHeading
