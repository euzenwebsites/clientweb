"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import "../stylessheets/Footer.css"
import Image from "next/image";
import Logo from "../../../public/logo.png"

function Footer(props) {
    const [linkedinHover, setLinkedinHover] = useState(false);
    const [behance, setBehance] = useState(false);
    const [instagram, setInstagram] = useState(false);
    return (
        <section className="w-[100%] flex flex-col items-center justify-center mt-20">
        <div className="footer_container w-[90%] ">

            <div className="grid grid-cols-2 pb-20">
                <div className="flex justify-start">
                    <div>
                    <Image src={Logo} width={70} height={70}/>
                    </div>
                </div>

                <div className="flex flex-row sm:flex-col gap-8 font-semibold">
                        <div >
                            <ul className="grid  grid-cols-1 sm:grid-cols-4 gap-4">
                                <li><Link href="/about">ABOUT</Link></li>
                                <li><Link href="/work">OUR WORK</Link></li>
                                <li><Link href="/insights">INSIGHTS</Link></li>
                                <li><Link href="/about">SHOP</Link></li>
                            </ul>
                        </div>

                        <div >
                            <ul className="grid  grid-cols-1 sm:grid-cols-4 gap-4">
                                <li><button onClick={() => {
                                    props.setMenu(false);
                                    props.setShowContactUs(true)
                                }}>CONTACT US</button></li>
                                <li><Link href="/">TESTIMONIALS</Link></li>
                                <li><Link href="http://Hello@avy.me">Hello@avy.me</Link></li>
                                <li>+44 7365 536 636</li>
                            </ul>
                        </div>

                </div>
            </div>

            <div className="border sm:p-10 flex flex-col sm:flex-row items-center">

                <div className="w-[100%] sm:w-[20%] max-sm:p-10">
                    <h3 className="uppercase font-bold text-lg sm:text-4xl ">lets stay connected</h3>
                </div>

                <div className="w-[100%] sm:w-[80%] grid grid-cols-3 gap-20 max-sm:p-10 max-sm:border-t">
                <div>
                    <Link href="/"><img src={`${linkedinHover ? "/assets/img/State=Hovered.png" : "/assets/img/mdi_linkedin.png"}`} onMouseEnter={()=>setLinkedinHover(true)} onMouseLeave={()=>setLinkedinHover(false)}/></Link>
                
                </div>
                <div>
                    <Link href="/"><img src={`${behance ? "/assets/img/State=Hovered (2).png" : "/assets/img/ri_behance-fill.png"}`}  onMouseEnter={()=>setBehance(true)} onMouseLeave={()=>setBehance(false)}/></Link>
                </div>
                <div>
                    <Link href="/"><img src={`${instagram ? "/assets/img/State=Hovered (1).png" : "/assets/img/mdi_instagram.png"}`} onMouseEnter={()=>setInstagram(true)} onMouseLeave={()=> setInstagram(false)}/></Link>
                </div>
                </div>

            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-between text-sm sm:text-base font-bold uppercase">
                <div>
                <p>AVY© CONSULTANCY. DESIGN, BRAND & MOTION</p>
                
                </div>

                <div>
                <ul className="grid grid-cols-2 gap-4 ">
                    <li><Link href="/">TERMS & CONDITIONS</Link></li>
                    <li><Link href="/">PRIVACY POLICY</Link></li>
                </ul>
                </div>
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