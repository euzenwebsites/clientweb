"use client"
import React, { useState } from "react"
import './stylessheets/home.css';
import Footer from "./ui/Footer"
import PopupHeader from "./ui/PopupHeader";
import { useEffect, useRef } from "react";

function Home({ selectedMenu }) {
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
export default Home;