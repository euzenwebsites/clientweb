"use client"
import React from 'react'
import Header from '@/app/components/ui/Header';
import { Row, Col, Button, Input, Select } from "antd"
import "../../components/stylessheets/Header.css"
import "../../components/stylessheets/About.css"
import { useState } from 'react';
const AboutHero = ({selectedMenu}) => {
    const [scrollEnd, setScrollEnd] = useState(false);
    const [popup, setPopup] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);

  return (
    <section>
        <Header showContactUs={showContactUs} setShowContactUs={setShowContactUs} selectedMenu={selectedMenu}/>
            
            <div id="about_header">
                <div className="about_title">
                    <p>ABOUT AVY</p>
                    <p>®</p>
                </div>
            <Row style={{  borderBottom: "1px solid black", marginTop: 60}} className="title_description">
                    <Col lg={12} sm={24} xs={24} className="title_description--text">
                        <p>
                            ALWAYS AIMING TO PUSH BOUNDARIES AND EXCEED EXPECTATIONS WITH EVERY PROJECT.
                        </p>
                        <p>
                            AVY Pruthi
                            Founder & CEO
                        </p>
                    </Col>
                    <Col lg={12} sm={24} xs={24} className="title_description--image">
                        <img src="/user.png"></img>
                    </Col>
            </Row>


                
            </div>
    </section>
  )
}

export default AboutHero
