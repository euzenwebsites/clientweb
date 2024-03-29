"use client"
import React, { useState } from "react"
import Link from "next/link";
import "../stylessheets/Header.css"
import { Button, Col, Row } from "antd";
import { RevealWrapper } from 'next-reveal'
import Image from "next/image";
import Logo from "@/public/logo.png"
import { useRouter } from "next/navigation";
function Header({ showContactUs, setShowContactUs, setSelectedMenu, selectedMenu }) {

    const [showSmallMenu, setSmallMenu] = useState(false);
    const router = useRouter()
    return (
        <div className="w-full">
            <div className={`relative  small_header--menu  ${showSmallMenu ? "small_header--menu-show" : "small_header--menu-hidden"}`}>

                <div className="absolute top-4 right-8 ">
                    <span style={{ cursor: "pointer" }} onClick={(e) => setSmallMenu(false)}>X</span>
                </div>
                <ul>
                    <li><Link href="/about" style={{ color: selectedMenu === 1 ? "#ff3600" : "black" }}>ABOUT</Link></li>
                    <li><Link href="/work" style={{ color: selectedMenu === 2 ? "#ff3600" : "black" }}>OUR WORK</Link></li>
                    <li><Link href="/insights" style={{ color: selectedMenu === 3 ? "#ff3600" : "black" }}>INSIGHTS</Link></li>
                    <li><Link href="/shop" style={{ color: selectedMenu === 4 ? "#ff3600" : "black" }}>SHOP</Link></li>
                </ul>
                <ul>
                    <li onClick={() => {
                        setShowContactUs(true);
                    }}><button>CONTACT US</button></li>

                </ul>

            </div>

            <div className={`overlay ${showSmallMenu || showContactUs ? "overlay-show" : "overlay-hidden"}`} onClick={() => {
                setSmallMenu(false);
                setShowContactUs(false);
            }}>
            </div>

            <div className="lg_header my-4">
                <Link href="/"><img src="/icon.png"></img></Link>
                <ul>
                    <li><Link href="/about" className={` hover:text-orange ${router.pathname == "/about" ? "active" : " "}`}>ABOUT</Link></li>
                    <li><Link href="/work" className={` hover:text-orange ${router.pathname == "/work" ? "active" : " "}`}>OUR WORK</Link></li>
                    <li><Link href="/insights" className={` hover:text-orange ${router.pathname == "/insights" ? "active" : " "}`}>INSIGHTS</Link></li>
                    <li><Link href="/shop" className={` hover:text-orange ${router.pathname == "/shop" ? "active" : " "}}`}>SHOP</Link></li>
                </ul>
                <ul>
                    <li onClick={() => {
                        setShowContactUs(true);
                    }}><button>CONTACT US</button></li>

                </ul>
            </div>

            <div className={`small_header mt-2 mx-2`}>
                <Link href="/"><img src="/icon.png" className="h-[25px]"></img></Link> 

                <img src="/assets/img/icons/mdi_menu.png" className="h-[30px]" onClick={() => {
                    setSmallMenu(!showSmallMenu);
                }}></img>

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

export default Header;