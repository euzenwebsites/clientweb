import React from 'react'

const LeftHeading = (props) => {
  return (
    <section className='w-[100%] flex justify-center '>
    <div  className='left-heading__banner w-[90%] '>
            <div className="left-heading__banner-inner" > 
                <h3 className="heading-left"> {props.heading}</h3>
            </div>
    </div> 
    </section> 
  )
}

export default LeftHeading
