"use client"
import { useRef, useState, useEffect } from 'react'
import React from 'react'
import Header from './ui/Header'
import Image from 'next/image'
import Vector from "../../public//assets/img/bg-vector.png"
import Man from "../../public/assets/img/man.png"
const Hero = ({ selectedMenu }) => {
    
    const [popup, setPopup] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);

        // Prevent scrolling during page loading
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling after a short delay
        setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 100);
        const handleScroll = (e) => {
            // const scrollTrigger = document.getElementById("hero_section");
            // const triggerPosition = scrollTrigger.getBoundingClientRect().bottom;
            if(triggerPosition <= 0){
                setPopup(true);

            }
                
            else setPopup(false);
        }
        window.addEventListener("scroll", handleScroll);

        // var heroHeight = document.getElementById("hero_section").getBoundingClientRect().height;
        // var headerHeight = document.getElementById("header_section").getBoundingClientRect().height;
        

        // document.getElementsByClassName("main-title")[0].style.height = `${heroHeight - headerHeight}px`;
        // return () => {
        //     window.removeEventListener('scroll', handleScroll); 
        // }
    }, [])
    // console.log("//////////////////", selectedMenu)
    
  return (
    <div className='bg-[#dadce1] flex flex-col h-full relative px-10 pb-10'  id="hero_section">
                    <Header type={true} showContactUs={showContactUs} setShowContactUs={setShowContactUs}></Header>
                    <div className=" flex flex-col " >
                        
                        <div className='w-[70%]'>
                        <h1 className='text-[120px] font-bold text-black ' style={{lineHeight:"7rem"}}>WE ARE <br></br>AVY<span className='text-xl' >®</span></h1>
                        <p className='text-gray text-lg font-bold pr-36'>We ignite collaboration with ambitious brands & businesses, marketers, and executives, crafting. Jaw-dropping creative solutions across industries</p>
                        
                        </div>
                        
                        <div>
                            <Image src={Vector} height={600} className='absolute right-0 bottom-0 z-5'></Image>
                            <Image src={Man} height={600} className='absolute right-0 bottom-0 z-10'/>
                        </div>
                        
                        <div className="w-[50%] mt-20" >
                            <h2 className='text-gray pb-10 border-b border-b-gray-500 font-bold '>CORE SERVICES :</h2>
                            <div className='flex justify-between border-b py-2 border-b-gray-500'>
                                <p className='font-semibold text-black padding-10  text-2xl'>Design</p>
                                <p className='text-orange font-bold'>01</p>
                            </div>
                            <div className='flex justify-between border-b py-2 border-b-gray-500'>
                                <p className='font-semibold text-black padding-10  text-2xl'>Brand Strategy</p>
                                <p className='text-orange font-bold'>02</p>
                            </div>
                            <div className='flex justify-between border-b py-2 border-b-gray-500'>
                                <p className='font-semibold text-black padding-10  text-2xl'>Motion Design & Animation</p>
                                <p className='text-orange font-bold'>03</p>
                            </div>
                        </div>

                        {/* <div>
                            <img src="/assets/img/man.png" style={{ height: "90%", bottom: "0", zIndex: "2000", position: "absolute", right: "20px", bottom: "0px", zIndex: "0" }}></img>
                        </div> */}
                    </div>
                </div>
  )
}

export default Hero
