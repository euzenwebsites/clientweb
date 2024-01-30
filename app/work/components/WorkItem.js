"use client"
import React from 'react'
import { useRef, useState } from 'react'
import "../../components/stylessheets/OurWork.css"
const WorkItem = () => {
    const img1 = useRef();
    const [imgNum, setImgNum] = useState(1);
  return (
    <div className={`img_item ${ imgNum === 1 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
        setImgNum(1)  
        setImgDetail(true)
    }}>
        
    <div ref={img1} className="flex flex-row gap-4 ">
    <div>
        <p className='number-circle'>01</p>
    </div>
    <div>
        <h3 className="uppercase text-4xl font-bold ">BLK pizza </h3>
        <p className="uppercase">branding</p>
    </div>
    </div>
        
            {/* <div  className="our-work__heading flex flex-col"> 
                <h3>BLK PIZZA</h3>
                <p>BRANDING</p>
            </div> */}
    </div>
  )
}

export default WorkItem
