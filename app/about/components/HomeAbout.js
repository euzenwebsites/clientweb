"use client"
import React, { useState, useEffect } from "react"

import "../../components/stylessheets/Header.css"
import "../../components/stylessheets/About.css"

import Footer from "@/app/components/ui/Footer.js"

function HomeAbout({selectedMenu}) {

    const [popup, setPopup] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);


    return (
        <div  >      
    
            <Footer setMenu = {setSmallMenu} flag={showSmallMenu} setShowContactUs = {setShowContactUs}></Footer>
        </div>
    )
}
export default HomeAbout