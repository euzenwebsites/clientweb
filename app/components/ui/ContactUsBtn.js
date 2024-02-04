"use client"
import React, { useState } from "react"
import Link from "next/link";
import "../../components/stylessheets/Header.css"
import { Button, Col, Row } from "antd";
import { RevealWrapper } from 'next-reveal'
import Image from "next/image";
import Logo from "@/public/logo.png"

function ContactUsBtn({ showContactUs, setShowContactUs, setSelectedMenu, selectedMenu }) {

    const [showSmallMenu, setSmallMenu] = useState(false);

    return (
        <div>
            <div>
            <button className="bg-orange text-white" onClick={() => {
                    setShowContactUs(true);
                }}>CONTACT US</button>

            </div>
            <div className={`relative small_header--menu  ${showSmallMenu ? "small_header--menu-show" : "small_header--menu-hidden"}`}>
                
            </div>

            <div className={`overlay ${showSmallMenu || showContactUs ? "overlay-show" : "overlay-hidden"}`} onClick={() => {
                setSmallMenu(false);
                setShowContactUs(false);
            }}>
            </div>


            {/* ---------------------contact us container ------------------------- */}

            <div className={`contact_us--container ${showContactUs ? "contact_us--container-show" : "contact_us--container-hidden"}`}>
                <div className="contact_us--title">
                    <p>LET&apos;S <br></br>GET IN TOUCH</p>
                    <Button danger size="large" shape="round" onClick={() => setShowContactUs(false)}>CLOSE</Button>
                </div>
                <div className="contact_us--form">
                    <Row className="form_item">
                        <Col span={4}>
                            <label>SUBJECT</label>
                        </Col>
                        <Col span={20}>
                            <select>
                                <option>Select</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className="form_item">
                        <Col span={4}>
                            <label>NAME</label>
                        </Col>
                        <Col span={20}>
                            <input type="text" placeholder="Enter Your Name" />
                        </Col>
                    </Row>
                    <Row className="form_item">
                        <Col span={4}>
                            <label>EMAIL</label>
                        </Col>
                        <Col span={20}>
                            <input type="email" placeholder="Enter Your Email" />
                        </Col>
                    </Row>
                    <Row className="form_item">
                        <Col span={4}>
                            <label>PHONE</label>
                        </Col>
                        <Col span={20}>
                            <input type="text" placeholder="Enter Your Phone" />
                        </Col>
                    </Row>
                    <Row className="form_item">
                        <Col span={4}>
                            <label>BUDGET</label>
                        </Col>
                        <Col span={20}>
                            <input type="text" placeholder="What did you have in mind?" />
                        </Col>
                    </Row>
                    <Row className="form_item">
                        <Col span={4}>
                            <label>MESSAGE</label>
                        </Col>
                        <Col span={20}>
                            <input type="text" placeholder="Tell us about you amazing idea!" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} offset={6}>
                            <Button type="primary" danger size="large" shape="round" style={{ width: "100%" }}>
                                SEND
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>


        </div>

    )
}


export default ContactUsBtn