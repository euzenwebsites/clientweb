"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import "../stylessheets/Footer.css"
import Image from "next/image";
import Logo from "../../../public/icon.png"

function Footer(props) {
    const [linkedinHover, setLinkedinHover] = useState(false);
    const [behance, setBehance] = useState(false);
    const [instagram, setInstagram] = useState(false);
    return (
        <section className="w-[100%] flex flex-col items-center justify-center mt-20">
        <div className="footer_container w-[90%] ">


            <div className="footer_link">
                <div>
                    <img src="/icon.png"></img>
                </div>
                <div>
                    <ul className="footer_menu">
                        <li className="footer_menu--item">
                            <div>
                                <p><Link href="/about">ABOUT</Link></p>
                                <p><Link href="/work">OUR WORK</Link></p>
                            </div>
                        </li>
                        <li className="footer_menu--item">
                            <div>
                                <p><Link href="/insights">INSIGHTS</Link></p>
                                <p><Link href="/about">SHOP</Link></p>
                            </div>
                        </li>
                        <li className="footer_menu--item">
                            <div>
                                <p><button onClick={() => {
                                    props.setMenu(false);
                                    props.setShowContactUs(true)
                                } }>CONTACT US</button></p>
                                <p><Link href="/">TESTIMONIALS</Link></p>
                            </div>
                        </li>
                        <li className="footer_menu--item">
                            <div>
                                <p><Link href="http://Hello@avy.me">Hello@avy.me</Link></p>
                                <p>+44 7365 536 636</p>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>

            <Row className="footer_title--container">
                <Col span={7} className="footer_title">
                        <p style={{ margin: "auto"}}>LET&apos;S STAY<br/>CONNECTED</p>
                </Col> 
                <Col span={17} className="site_list">
                        <Link href="/"><img src={`${linkedinHover ? "/assets/img/State=Hovered.png" : "/assets/img/mdi_linkedin.png"}`} onMouseEnter={()=>setLinkedinHover(true)} onMouseLeave={()=>setLinkedinHover(false)}/></Link>
                        <Link href="/"><img src={`${behance ? "/assets/img/State=Hovered (2).png" : "/assets/img/ri_behance-fill.png"}`}  onMouseEnter={()=>setBehance(true)} onMouseLeave={()=>setBehance(false)}/></Link>
                        <Link href="/"><img src={`${instagram ? "/assets/img/State=Hovered (1).png" : "/assets/img/mdi_instagram.png"}`} onMouseEnter={()=>setInstagram(true)} onMouseLeave={()=> setInstagram(false)}/></Link>
                </Col>
            </Row>
            <div className="copywrite">
                <p>AVY© CONSULTANCY. DESIGN, BRAND & MOTION</p>
                <ul>
                    <li><Link href="/">TERMS & CONDITIONS</Link></li>
                    <li><Link href="/">PRIVACY POLICY</Link></li>
                </ul>
            </div>
            <div className={`popup_menu ${ props.flag ? "popup_menu--show" : "popup_menu--hidden"}`}>
                <div className="toolbar">
                    <img src="/icon.png"></img>
                    <p onClick={() => props.setMenu(false)}>
                        <span>CLOSE </span>
                        <span>X</span>
                    </p>
                </div>
                <div className="menu_list">
                    <Row>
                        <Col span={12} offset={6}>
                            <ul>
                                <li><Link href="/about">ABOUT</Link></li>
                                <li><Link href="/work">OUR WORK</Link></li>
                                <li><Link href="/insights">INSIGHTS</Link></li>
                                <li><Link href="/shop">SHOP</Link></li>
                                <li onClick={() => {
                                    props.setMenu(false);
                                    props.setShowContactUs(true)
                                } }><button>CONTACT</button></li>
                            </ul>
                            <img src="/assets/img/popup/avy-website-banner-pattern-white 1 (1).png" className="red_img"></img>
                            <img src="/assets/img/popup/unsplash_XcZ78DlXtes.png" className="avy_img"></img>
                        </Col>    
                    </Row>
                    
                    
                </div>
            </div>
        </div>
        </section>
    )
}

export default Footer;