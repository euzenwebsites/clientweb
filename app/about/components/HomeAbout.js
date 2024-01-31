"use client"
import React, { useState, useEffect } from "react"
import { Row, Col, Button, Input, Select } from "antd"

import "../../components/stylessheets/Header.css"
import "../../components/stylessheets/About.css"
import PopupHeader from "@/app/components/ui/PopupHeader"
import ReadyToWork from "@/app/components/ui/ReadyToWork.js"
import Footer from "@/app/components/ui/Footer.js"
import Member from "@/app/components/Member"




function HomeAbout({selectedMenu}) {

    const [popup, setPopup] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         window.scrollTo(0, 0);
    //     }, 0);

    //     // Prevent scrolling during page loading
    //     document.body.style.overflow = 'hidden';

    //     // Re-enable scrolling after a short delay
    //     setTimeout(() => {
    //         document.body.style.overflow = 'auto';
    //     }, 100);

    //     const handleScroll = () => {
    //         const scrollTrigger = document.getElementById("about_header");
    //         const triggerPosition = scrollTrigger.getBoundingClientRect().bottom;
    //         console.log(triggerPosition);
    //         if(triggerPosition < 50){
    //             setPopup(true);

    //         }
                
    //         else setPopup(false);
    //     }
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, []);
    console.log(selectedMenu === 1)
    
    return (
        <div style={{ padding: "0px 60px"}} >      
            {
                popup && (<PopupHeader setSmallMenu = {setSmallMenu}/>)
            }
    
            <Footer setMenu = {setSmallMenu} flag={showSmallMenu} setShowContactUs = {setShowContactUs}></Footer>
        </div>
    )
}
export default HomeAbout