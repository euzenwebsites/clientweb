import React from "react"
import { Row, Col, Input,Select, Button } from "antd";
import "../stylessheets/About.css"
import WorkWithUs from "./WorkWithUs";
import RevealText from "../utils/RevealText";
function ReadyToWork() {
    return (
        <section className='w-[100%] flex justify-center mt-20'>
        <div className=" w-[90%]">

                    <WorkWithUs/>
                

                <Row className="form_container">
             
                    <Col span={3}>
                        <label>SUBJECT</label>
                    </Col>
            

                    <RevealText>
                    <Col span={21}>
                    <select>
                                <option>Select</option>
                            </select>
                    </Col>
                    </RevealText>
                    
     
                    <Col span={3} style={{ marginTop: 60 }}>
                        <label>NAME</label>
                    </Col>
         

                    <RevealText>

                    <Col span={9} style={{ marginTop: 60, paddingRight: 30 }}>
                    <input type="text" placeholder="Enter Your Name"/>
                    </Col>
                    </RevealText>


                    <Col span={3} style={{ marginTop: 60, paddingLeft: 30 }}>
                        <label>EMAIL</label>
                    </Col>
                    
                    
                    <RevealText>
                    <Col span={9} style={{ marginTop: 60 }}>
                    <input type="email" placeholder="Enter Your Email"/>
                    </Col>
                    </RevealText>

                    <Col span={3} style={{ marginTop: 60 }}>
                        <label>PHONE</label>
                    </Col>

                    <Col span={9} style={{ marginTop: 60, paddingRight: 30 }}>
                    <input type="text" placeholder="Enter Your Phone"/>
                    </Col>
                    <Col span={3} style={{ marginTop: 60, paddingLeft: 30 }}>
                        <label>BUDGET</label>
                    </Col>
                    <RevealText>
                    <Col span={9} style={{ marginTop: 60 }}>
                    <input type="text" placeholder="What did you have in mind?"/>
                    </Col>
                    </RevealText>
                    <Col span={3} style={{ marginTop: 60 }}>
                        <label>Message</label>
                    </Col>

                    <RevealText>
                    <Col span={21} style={{ marginTop: 60 }}>
                    <input type="text" placeholder="Tell us about you amazing idea!"/>
                    </Col>
                    </RevealText>
                    <Col span={8} offset={8}>
                        <button style={{ width: "100%"}}>SEND</button>
                    </Col>
                    
                </Row>
            </div>
        </section>
    );
}

export default ReadyToWork;