
import React from 'react'
import RevealText from '../utils/RevealText'
import RevealTextRight from '../utils/RevealTextRight'

const WorkWithUs = () => {
    return (
        <section className='w-[100%] flex  justify-center mt-20 '>

            <div className="w-[90%] flex flex-col gap-10">


                <div className="w-[100%] flex flex-row items-center  ">
                    <RevealTextRight>
                    <div className='w-[50%]' >
                            <h3 className=" text-9xl font-black font-bold uppercase">ready</h3>    
                    </div>
                    </RevealTextRight>

                    <RevealText>
                        <div className='w-[50%] flex flex-row items-center' >
                            <div className="w-[100%] h-[2px] bg-black "></div>
                            <h3 className=" text-9xl font-black font-bold uppercase">to</h3>
                        </div>
                    </RevealText>
                </div>


                <div className="w-[100%] flex flex-row items-center">

                    <RevealTextRight>
                        <div className='w-[50%]'>
                            <h3 className="w-[50%] text-9xl font-black font-bold uppercase">work</h3>
                        </div>
                    </RevealTextRight>


                    <RevealText>
                        <div className='w-[50%] flex flex-row items-center'>
                            <div className="w-[100%] h-[2px] bg-black "></div>
                            <h3 className=" text-9xl font-black font-bold uppercase">with</h3>
                        </div>
                    </RevealText>

                </div>

                <RevealText>
                    <div className="w-[100%] flex flex-row items-center">
                        <div className="w-[70%] h-[2px] bg-black "></div>

                        <div className="w-[30%] flex flex-row items-center">
                            <div className="w-[50%] h-[50%] ml-10 bg-orange rounded-full">
                                <h3 className="text-7xl text-white  font-bold uppercase p-10">Us
                                </h3>
                            </div>
                            <span className="text-black inline-flex font-bold text-9xl ml-10">?</span>
                        </div>
                    </div>
                </RevealText>


            </div>
        </section>
    )
}

export default WorkWithUs
