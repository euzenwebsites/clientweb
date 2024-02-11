"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import "../stylessheets/Footer.css"
import Image from "next/image";
import Logo from "../../../public/logo.png"
import "@/app/components/stylessheets/PopupHeader.css"

function Footer(props) {
    const [linkedinHover, setLinkedinHover] = useState(false);
    const [behance, setBehance] = useState(false);
    const [instagram, setInstagram] = useState(false);
    return (
        <section className="w-[100%] flex flex-col items-center justify-center mt-20">
            <div className=" w-[90%] flex flex-col justify-center">

                <div className="flex flex-row gap-8 pb-20">

                    <div className="w-[30%] sm:w-[50%] flex sm:justify-start ">
                        <div>
                            <Image src={Logo} width={70} height={70} />
                        </div>
                    </div>

                    <div className="w-[70%] sm:w-[50%] flex flex-row sm:flex-col gap-10 font-semibold text-xs sm:text-sm uppercase">
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

                <div className="border sm:p-10 flex flex-col sm:flex-row sm:gap-10 items-center">

                    <div className="w-[100%] sm:w-[20%] max-sm:p-10 ">
                        <h3 className="uppercase font-bold text-lg sm:text-3xl ">lets stay connected</h3>
                    </div>

                    <div className="w-[100%] sm:w-[80%] grid grid-cols-3 gap-20 max-sm:p-10 max-sm:border-t">
                        <div>
                            <Link href="/"><img src={`${linkedinHover ? "/assets/img/State=Hovered.png" : "/assets/img/mdi_linkedin.png"}`} onMouseEnter={() => setLinkedinHover(true)} onMouseLeave={() => setLinkedinHover(false)} /></Link>

                        </div>
                        <div>
                            <Link href="/"><img src={`${behance ? "/assets/img/State=Hovered (2).png" : "/assets/img/ri_behance-fill.png"}`} onMouseEnter={() => setBehance(true)} onMouseLeave={() => setBehance(false)} /></Link>
                        </div>
                        <div>
                            <Link href="/"><img src={`${instagram ? "/assets/img/State=Hovered (1).png" : "/assets/img/mdi_instagram.png"}`} onMouseEnter={() => setInstagram(true)} onMouseLeave={() => setInstagram(false)} /></Link>
                        </div>
                    </div>

                </div>

                <div className=" mt-8 mb-20 flex flex-col sm:flex-row  justify-between text-xs sm:text-base font-bold uppercase">
                    <div>
                        <p>AVY© CONSULTANCY. DESIGN, BRAND & MOTION</p>

                    </div>

                    <div className="max-sm:mt-4">
                        <ul className="grid grid-cols-2 gap-4 ">
                            <li><Link href="/">TERMS & CONDITIONS</Link></li>
                            <li><Link href="/">PRIVACY POLICY</Link></li>
                        </ul>
                    </div>
                </div>


                <div className={`relative flex justify-center items-center popup_menu ${props.flag ? "popup_menu--show" : "popup_menu--hidden"}`}>


                    <Link href="/" className="absolute top-10 left-20 ">
                        <img src="/icon.png"></img>
                    </Link>

                    <button onClick={() => props.setMenu(false)}
                        className="absolute top-10 right-20 font-semibold">CLOSE X</button>


                    <div className="sm:w-[60%] h-[80%]" >
                        <div className="relative bg-white">
                        <ul className="flex flex-col gap-4 text-3xl sm:text-5xl font-bold uppercase">
                            <li className="text-black hover:text-orange hover:bg-black p-2 "><Link href="/about">ABOUT</Link></li>
                            <li className="text-black hover:text-orange hover:bg-black p-2 "><Link href="/work">OUR WORK</Link></li>
                            <li className="text-black hover:text-orange hover:bg-black p-2 "><Link href="/insights">INSIGHTS</Link></li>
                            <li className="text-black hover:text-orange hover:bg-black p-2 "><Link href="/shop">SHOP</Link></li>
                            <li className="text-black hover:text-orange hover:bg-black p-2 "
                             onClick={() => {
                                props.setMenu(false);
                                props.setShowContactUs(true)
                            }}><button>CONTACT</button></li>
                        </ul>
                        <img src="/assets/img/popup/avy-website-banner-pattern-white 1 (1).png" className="red_img"></img>
                        <img src="/assets/img/popup/unsplash_XcZ78DlXtes.png" className="avy_img"></img>

                        </div>

                      



                    </div>

                </div>
                

            </div>
        </section>
    )
}

export default Footer;