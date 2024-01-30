"use client"
import React, { useState } from "react"
import Header from "./ui/Header";

import './stylessheets/home.css';
import Footer from "./ui/Footer"
import ReadyToWork from "./ui/ReadyToWork"
import PopupHeader from "./ui/PopupHeader";
import { useEffect, useRef } from "react";
import LeftHeading from "./ui/LeftHeading";
import CEOSec from "./CEOSec";
import Testimonials from "./ui/Testimonials";
import Service from "./Service";
import HowWeDo from "./ui/HowWeDo";
import Client from "./Client";
import Accordion from "./Accordion";
import TestimonialSec from "./TestimonialSec";
import HowWeDoSec from "./HowWeDoSec";

function Home({ selectedMenu }) {
    const homeRef = useRef(null)
    const [popup, setPopup] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);

        // Prevent scrolling during page loading
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling after a short delay
        setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 100);
        const handleScroll = (e) => {
            const scrollTrigger = document.getElementById("hero_section");
            const triggerPosition = scrollTrigger.getBoundingClientRect().bottom;
            if(triggerPosition <= 0){
                setPopup(true);

            }
                
            else setPopup(false);
        }
        window.addEventListener("scroll", handleScroll);

        // var heroHeight = document.getElementById("hero_section").getBoundingClientRect().height;
        // var headerHeight = document.getElementById("header_section").getBoundingClientRect().height;


        // document.getElementsByClassName("main-title")[0].style.height = `${heroHeight - headerHeight}px`;
        // return () => {
        //     window.removeEventListener('scroll', handleScroll); 
        // }
    }, [])
    // console.log("//////////////////", selectedMenu)
    return (
        <div ref={homeRef}>
            <div className="main" >
                { 
                    popup && (<PopupHeader setSmallMenu = {setSmallMenu}/>)
                }
       <Footer setMenu = {setSmallMenu} flag={showSmallMenu} setShowContactUs = {setShowContactUs}></Footer>

            </div>
        </div>
    )
}
export default Home;