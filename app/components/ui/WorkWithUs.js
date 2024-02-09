"use client"
// Import necessary modules and dependencies
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ButtonFlip from "../utils/ButtonFlip";

const WorkWithUs = () => {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Animation for the first box
    gsap.fromTo(
      ".box1",
      {
        x: -400,
        opacity: 0, // Add opacity property for better control
        duration:1.5,
        ease:"cric.out",
      },
      {
        x: 0,
        opacity: 1,
        duration:1.5,
        ease:"cric.out",
        scrollTrigger: {
          trigger: ".box1",
          start: "top 80%",
          end: "top 50%", // Adjust the end position as needed
     
        },
      }
    );

    // Animation for the second box
    gsap.fromTo(
      ".box2",
      {
        x: 400,
        opacity: 0, 
        duration:1.5,
        ease:"cric.out",

      },
      {
        x: 0,
        opacity: 1,
        duration:1.5,
        ease:"cric.out",
        scrollTrigger: {
          trigger: ".box2",
          start: "top 80%",
          end: "top 50%", // Adjust the end position as needed
        },
      }
    );
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section className='my-20 '>
      <div className=' flex flex-col justify-center gap-2 sm:gap-8 overflow-hidden'>

        <div className="flex flex-row gap-2 sm:gap-8">
          <div className='box1'>
            <h3 className="text-4xl sm:text-9xl font-black font-bold uppercase ">are you</h3>
          </div>
          <div className='box2'>
            <h3 className="text-4xl sm:text-9xl font-black font-bold uppercase">ready to</h3>
          </div>
        </div>

        <div className="flex flex-row gap-2">

          <div className='box1 w-[70%] flex flex-row items-center'>
            <div className="bg-[#000] h-[4px] w-[50%]"></div>
            <h3 className=" text-4xl sm:text-9xl font-black font-bold uppercase pl-2 ">work</h3>
          </div>

          <div className='box2 w-[30%] flex items-center '>
            <div className="bg-black h-[4px] w-[100%]"></div>
          </div>
          
        </div>

        <div className='box1 w-[100%] flex flex-row gap-4 items-center'>
        <h3 className=" text-4xl sm:text-9xl font-black font-bold uppercase pl-2 ">with</h3>
        <div className="bg-[#000] h-[4px] w-[50%]"></div>
        <div className="flex flex-row gap-2 items-center text-4xl sm:text-7xl">

                <div className="w-[50px] sm:w-[130px] h-[50px] sm:h-[130px] bg-orange rounded-full  p-4 sm:p-8 text-xl sm:text-6xl flex justify-center items-center">
                <h3 className="text-white font-bold uppercase ">us</h3>
                </div>
                <h3 className=" font-bold uppercase text-2xl sm:text-9xl">?</h3>
        </div>
        </div>

      </div>
      
    </section>
  );
};

export default WorkWithUs;
