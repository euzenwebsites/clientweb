import React from "react"
import { Row, Col, Input,Select, Button } from "antd";
import "../stylessheets/About.css"
import WorkWithUs from "./WorkWithUs";

function ReadyToWork() {
    return (
        <section className='w-[100%] flex justify-center mt-20'>
        <div className=" w-[90%]">

                    <WorkWithUs/>
                
                <div className="border rounded p-4 sm:p-20 flex flex-col justify-center items-center gap-10">

                    <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 gap-20 font-normal text-lg sm:text-xl">
                        <div className="sm:col-span-2 flex flex-row gap-8">
                            <label>SUBJECT</label>
                            <select className="border-b w-full pb-4">
                                <option>Select</option>
                            </select>
                        </div>

                        <div className=" flex flex-row items-center gap-4">
                            <label className="w-[30%]">NAME</label>
                            <input type="text" placeholder="Enter Your Name" className="w-[70%] border-b w-full pb-4"/> 
                        </div>

                        <div className=" flex flex-row gap-4">
                            <label className="w-[30%]">EMAIL</label>
                            <input type="email" placeholder="Enter Your Email" className="w-[70%] border-b w-full pb-4"/>
                        </div>

                        <div className=" flex flex-row gap-4">
                            <label className="w-[30%]">PHONE</label>
                            <input type="text" placeholder="Enter Your Phone" className="w-[70%] border-b w-full pb-4"/>
                        </div>

                        <div className=" flex flex-row gap-4">
                            <label className="w-[30%]">BUDGET</label>
                             <input type="text" placeholder="What did you have in mind?" className=" w-[70%] border-b w-full pb-4"/>
                        </div>

                        <div className="sm:col-span-2 flex flex-row gap-4">
                         <label>Message</label>
                          <input type="text" placeholder="Tell us about you amazing idea!" className="border-b w-full pb-4"/>

                        </div>


                    </div>

                    <div >
                        <button className="bg-orange py-4 px-20 uppercase text-semibold rounded-lg text-white ">send</button>
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default ReadyToWork;