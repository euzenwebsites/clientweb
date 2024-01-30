"use client"
import React from 'react'
import { useState } from 'react';
import Footer from './Footer';

const MainFooter = () => {
    const [popup, setPopup] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const [popupMenu, setPopupMenu] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);
  return (
    
    <div>
      <Footer setMenu = {setPopupMenu} flag={popupMenu} setShowContactUs = {setShowContactUs}></Footer>
    </div>
  )
}

export default MainFooter
