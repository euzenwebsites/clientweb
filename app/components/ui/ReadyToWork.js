import React from "react"
import { Row, Col, Input,Select, Button } from "antd";
import "../stylessheets/About.css"
function ReadyToWork() {
    return (
        <section className='w-[100%] flex justify-center mt-20'>
        <div className="readytowork_container w-[90%]">

                <div className="flex flex-col">

                    <div className="[100%]">
                        <h3 className="text-9xl font-black font-bold">ARE YOU READY TO</h3>
                    </div>

                    <div className="flex flex-row items-center">
                        <div className="w-1/3 h-[2px] bg-black flex items-center justify-center"></div>
                        <div ><h3 className="w-1/3 text-9xl font-black font-bold uppercase">work</h3></div>
                        <div className="w-1/3 h-[2px] bg-black "></div>
                    </div>

                    <div className="flex flex-row items-center">
                        <div className="w-[30%]" ><h3 className="text-9xl font-black font-bold uppercase">with</h3></div>
                        <div className="w-[50%] h-[2px] bg-black "></div>

                        <div className=" flex flex-row items-center">
                        <div className="w-[50%] h-[50%] ml-10 bg-orange rounded-full">
                            <h3 className="text-7xl text-white  font-bold uppercase p-10">Us
                        </h3>
                        </div>
                        <span className="text-black inline-flex font-bold text-9xl ml-10">?</span>
                        </div>
                    </div>
                    
                    
                </div>

                <Row className="form_container">
                    <Col span={3}>
                        <label>SUBJECT</label>
                    </Col>
                    <Col span={21}>
                    <select>
                                <option>Select</option>
                            </select>
                    </Col>
                    <Col span={3} style={{ marginTop: 60 }}>
                        <label>NAME</label>
                    </Col>
                    <Col span={9} style={{ marginTop: 60, paddingRight: 30 }}>
                    <input type="text" placeholder="Enter Your Name"/>
                    </Col>
                    <Col span={3} style={{ marginTop: 60, paddingLeft: 30 }}>
                        <label>EMAIL</label>
                    </Col>
                    <Col span={9} style={{ marginTop: 60 }}>
                    <input type="email" placeholder="Enter Your Email"/>
                    </Col>
                    <Col span={3} style={{ marginTop: 60 }}>
                        <label>PHONE</label>
                    </Col>
                    <Col span={9} style={{ marginTop: 60, paddingRight: 30 }}>
                    <input type="text" placeholder="Enter Your Phone"/>
                    </Col>
                    <Col span={3} style={{ marginTop: 60, paddingLeft: 30 }}>
                        <label>BUDGET</label>
                    </Col>
                    <Col span={9} style={{ marginTop: 60 }}>
                    <input type="text" placeholder="What did you have in mind?"/>
                    </Col>
                    <Col span={3} style={{ marginTop: 60 }}>
                        <label>Message</label>
                    </Col>
                    <Col span={21} style={{ marginTop: 60 }}>
                    <input type="text" placeholder="Tell us about you amazing idea!"/>
                    </Col>
                    <Col span={8} offset={8}>
                        <button style={{ width: "100%"}}>SEND</button>
                    </Col>
                    
                </Row>
            </div>
        </section>
    );
}

export default ReadyToWork;