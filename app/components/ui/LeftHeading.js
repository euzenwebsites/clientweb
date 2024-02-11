import RevealSlide from "../utils/RevealSlide"

const LeftHeading = (props) => {
  
 

  return ( 
    <section className='w-[100%] flex justify-center mt-10' >
      <div className="w-[90%] bg-[#dbdde2] py-4 xl:py-8 2xl:py-10 flex sm:justify-end border-b-8">
        <div className="w-[100%] sm:w-[50%] pr-10 sm:pr-40 p-4">
        <RevealSlide>
          <div >
              <h3 className="font-bold text-4xl xl:text-5xl 2xl:text-6xl uppercase heading-left" > {props.heading}</h3>
          </div>
        </RevealSlide>
        </div>
      </div>
    </section> 
  )
}

export default LeftHeading
