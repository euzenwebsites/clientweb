"use client"
import { useRef, useState, useEffect } from 'react'
import React from 'react'
import Header from './ui/Header'

const Hero = ({ selectedMenu }) => {
    
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
    <div style={{ backgroundColor: "hsl(223, 11%, 87%)", display:"flex", flexDirection:"column" , height: "100vh"}} id="hero_section">
                    <Header type={true} showContactUs={showContactUs} setShowContactUs={setShowContactUs}></Header>
                    <div className="main-title" style={{display:"flex", flexDirection: "column", justifyContent: "space-between"}}>
                        
                        <div>
                        <p style={{  fontSize:"12vw", fontWeight: 713, margin: 0, lineHeight: 0.9 }}>WE ARE <br></br>AVY<span style={{ fontSize: "6vw", fontWeight: 712, verticalAlign: "top"}}>®</span></p>
                        <p style={{ width: "50%", padding: "0,60px", color: '#727272', fontSize: "1.4vw", fontWeight: "712" }}>We ignite collaboration with ambitious brands & businesses, marketers, and executives, crafting. Jaw-dropping creative solutions across industries</p>
                        </div>
                        <div>
                            <img src="/assets/img/bg-vector.png" style={{ height: "90%", bottom: "0", zIndex: "0", position: "absolute", right: "20px", bottom: "0px" }}></img>
                        </div>
                        
                        <div className="services" style={{width: "50%" }}>
                            <h2 style={{ padding: "0,60px", color: '#727272', margin: 0, padding: "0.5vw 0vw", fontSize: "1vw", fontWeight: "712",  borderBottom: "solid" }}>CORE SERVICES :</h2>
                            <p style={{ fontWeight: "700", color: '#1A1A1A', margin: 0, padding: "0.5vw 0vw", borderBottom: "solid", borderColor: "#727272",  fontSize: "1vw" }}>Design<span style={{ float: "right", color: "red" }}>01</span></p>
                            <p style={{ fontWeight: "700", color: '#1A1A1A', margin: 0, padding: "0.5vw 0vw", borderBottom: "solid", borderColor: "#727272",  fontSize: "1vw" }}>Brand Strategy <span style={{ float: "right", color: "red" }}>02</span></p>
                            <p style={{ fontWeight: "700", color: '#1A1A1A', margin: 0, padding: "0.5vw 0vw", borderBottom: "solid", borderColor: "#727272",  fontSize: "1vw" }}>Motion Design & Animation<span style={{ float: "right", color: "red" }}>03</span></p>
                        </div>
                        <div>
                            <img src="/assets/img/man.png" style={{ height: "90%", bottom: "0", zIndex: "2000", position: "absolute", right: "20px", bottom: "0px", zIndex: "0" }}></img>
                        </div>
                    </div>
                </div>
  )
}

export default Hero
