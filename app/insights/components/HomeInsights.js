
"use client"
import React, {useEffect, useState} from "react";
import "../../components/stylessheets/Header.css"
import "../../components/stylessheets/About.css"
import Header from "@/app/components/ui/Header"
import PopupHeader from "@/app/components/ui/PopupHeader"

import "../../components/stylessheets/Insights.css"
import InsightHeading from "./InsightHeading";



function HomeInsights({ selectedMenu }) {

    const [popup, setPopup] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const [popupMenu, setPopupMenu] = useState(false);
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
        const handleScroll = () => {
            const scrollTrigger = document.getElementById("insight_title");
            const triggerPosition = scrollTrigger.getBoundingClientRect().bottom;
            console.log(triggerPosition);
            if(triggerPosition < 50){
                setPopup(true);

            }
                
            else setPopup(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <section className="w-[100%] flex justify-center">
        <div className="w-[90%]" >
            <div className="w-full" id="insight_title">
            <Header showContactUs={showContactUs} setShowContactUs={setShowContactUs} selectedMenu={selectedMenu}/>
            <InsightHeading/>
            </div>
            {
                popup && (<PopupHeader setSmallMenu = {setPopupMenu}/>)
            }

            
        </div>
        </section>
    )
}

export default HomeInsights;