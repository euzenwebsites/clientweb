import React from 'react'
import "../../components/stylessheets/About.css"
import { Row, Col } from "antd"
const AboutDetail = () => {
  return (
    <section className='w-[100%] flex justify-center mt-20'>
        <Row className="w-[90%] detail_text">
                    <Col lg={12} sm={24} xs={24} style={{ fontSize: 22}}>
                        <p>
                            After a decade managing projects globally for creative agencies across four continents, the pandemic led me to a transformative decision. I bid farewell to my corporate role to wholeheartedly pursue my true passion: sparking inspiration for clients.
                        </p>
                        <p>
                            I excel in revealing a brand&apos;s unique appeal and turning concepts into reality. Building lasting connections is my philosophy.
                        </p>
                        <p>
                            My work spans various sectors, from manufacturing to fintech and luxury to transportation, and I&apos;ve earned recognition with seven prestigious awards along the way.
                        </p>
                    </Col>
                    <Col lg={12} sm={24} xs={24} className="detail_contact">
                        <p>
                            Avy partners with select strategists, storytellers, designers and content creators on complex projects on a per-need basis
                        </p>
                        <button>WORK WITH US</button>
                    </Col>
                </Row>
    </section>
  )
}

export default AboutDetail
