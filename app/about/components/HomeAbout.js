"use client"
import React, { useState, useEffect } from "react"

import "../../components/stylessheets/Header.css"
import "../../components/stylessheets/About.css"

import Footer from "@/app/components/ui/Footer.js"
import PopupHeader from "@/app/components/ui/PopupHeader"

function HomeAbout({ selectedMenu }) {
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
            const scrollTrigger = document.getElementById("about_header1");
            const triggerPosition = scrollTrigger.getBoundingClientRect().bottom;
            if(triggerPosition <= 0){
                setPopup(true);

            }
                
            else setPopup(false);
        }
        window.addEventListener("scroll", handleScroll);
    }, [])
  
    return (
        <div >
            <div className="main" >
                { 
                    popup && (<PopupHeader setSmallMenu = {setSmallMenu} />)
                }
       <Footer setMenu = {setSmallMenu} flag={showSmallMenu} setShowContactUs = {setShowContactUs}></Footer>

            </div>
        </div>
    )
}
export default HomeAbout;
