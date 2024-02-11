import React from "react"
import { Row, Col, Input,Select, Button } from "antd";
import "../stylessheets/About.css"
import WorkWithUs from "./WorkWithUs";
import ButtonFlip from "../utils/ButtonFlip";

function ReadyToWork() {
    return (
        <section className='w-[100%] flex justify-center sm:mt-20'>
        <div className=" w-[90%]">

                    <WorkWithUs/>
                
                <div className="border rounded p-4 sm:p-20 flex flex-col justify-center items-center gap-10">

                    <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 gap-20 font-normal text-lg sm:text-xl uppercase">

                        <div className="sm:col-span-2 w-[100%] flex flex-row gap-4">
                            <label className="font-medium ">SUBJECT</label>
                            <select className="border-b w-full pb-4 ">
                                <option className="font-medium text-black">Select</option>
                            </select>
                        </div>

                        <div className=" flex flex-row items-center gap-4">
                            <label className="w-[20%] font-medium">NAME</label>
                            <input type="text" placeholder="Enter Your Name" 
                            className="w-[80%] border-b w-full pb-4 text-black placeholder:text-black
                             placeholder:font-medium focus:outline-0"/> 
                        </div>

                        <div className=" flex flex-row gap-4">
                            <label className="w-[20%] font-medium">EMAIL</label>
                            <input type="email" placeholder="Enter Your Email" 
                            className="w-[80%] border-b w-full pb-4 placeholder:text-black
                            placeholder:font-medium focus:outline-0"/>
                        </div>

                        <div className=" flex flex-row gap-4">
                            <label className="w-[20%] font-medium">PHONE</label>
                            <input type="text" placeholder="Enter Your Phone" 
                            className="w-[80%] border-b w-full pb-4 placeholder:text-black
                            placeholder:font-medium focus:outline-0"/>
                        </div>

                        <div className=" flex flex-row gap-4">

                            <label className="w-[20%] font-medium">BUDGET</label>
                            <select className="w-[80%] border-b w-full pb-4 focus:outline-0">
                                <option className="font-medium text-black focus:outline-0">What do you have in your mind?</option>
                            </select>

                        </div>

                        <div className="sm:col-span-2 flex flex-row gap-2">
                         <label className="font-medium ">Message</label>
                          <input type="text" placeholder="Tell us about you amazing idea!" 
                          className="w-[100%] border-b w-full pb-4 placeholder:text-black focus:outline-0
                            placeholder:font-medium"/>

                        </div>


                    </div>

                    <div className="w-[80%] sm:w-[40%]" >
                        <ButtonFlip text="send"/>
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default ReadyToWork;