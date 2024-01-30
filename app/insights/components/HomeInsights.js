
"use client"
import React, {useEffect, useState} from "react";
import "../../components/stylessheets/Header.css"
import "../../components/stylessheets/About.css"
import Header from "@/app/components/ui/Header"
import PopupHeader from "@/app/components/ui/PopupHeader"

import "../../components/stylessheets/Insights.css"



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
        <div style={{ padding: "0px 60px"}}>
            <Header showContactUs={showContactUs} setShowContactUs={setShowContactUs} selectedMenu={selectedMenu}/>
            <div className="insight_title" id="insight_title">
                <p>INSIGHTS</p>
            </div>
            {
                popup && (<PopupHeader setSmallMenu = {setPopupMenu}/>)
            }

            {/* <div className="shop_list">

                <ul className="shop_category">
                    <li>ALL</li>
                    <li>BUSINESS</li>
                    <li>DESIGN</li>
                    <li>LOGO IDENITY</li>
                    <li>MARKET</li>
                    <li>MOTION</li>
                    <li>PARTNERS</li>
                    <li>VIDEOS</li>
                </ul>

                <div className="shop_img--list">
                       
                        
                        {/* <Row className="shop_img--item">
                            <Col span={8} className="shop_img">
                                <img src="/assets/img/shops/shop (1).png"/>
                            </Col>
                            <Col span={16} className="shop_description">
                                <p>AVY Pruthi, Nuneaton business owner – Coventry & Warwickshire Chamber workshops</p>
                                <div>
                                    <ul>
                                        <li>30 June 2021</li>
                                        <li>Business</li>
                                    </ul>
                                    
                                        <Link href="/shop" style={{ color: "white"}}><button>READ ARTICLE</button></Link>
                                    
                                </div>
                            </Col>
                        </Row>

                        <Row className="shop_img--item">
                            <Col span={8} className="shop_img">
                                <img src="/assets/img/shops/shop (2).png"/>
                            </Col>
                            <Col span={16} className="shop_description">
                                <p>Daily Logo Challenge for 50 days</p>
                                <div>
                                    <ul>
                                        <li>30 June 2021</li>
                                        <li>Design</li>
                                        <li>Logo Identity</li>
                                    </ul>
                                    <Link href="/shop" style={{ color: "white"}}><button>READ ARTICLE</button></Link>
                                </div>
                            </Col>
                        </Row>

                        <Row className="shop_img--item">
                            <Col span={8} className="shop_img">
                                <img src="/assets/img/shops/shop (3).png"/>
                            </Col>
                            <Col span={16} className="shop_description">
                                <p>Bringing a Business to Life: Chamber of Commerce, AVY Pruthi</p>
                                <div>
                                    <ul>
                                        <li>30 June 2021</li>
                                        <li>Business</li>
                                    </ul>
                                    <Link href="/shop" style={{ color: "white"}}><button>READ ARTICLE</button></Link>
                                </div>
                            </Col>
                        </Row>

                        <Row className="shop_img--item">
                            <Col span={8} className="shop_img">
                                <img src="/assets/img/shops/shop (4).png"/>
                            </Col>
                            <Col span={16} className="shop_description">
                                <p>Our new Trustpilot partnership, and how it&quot;ll help your business</p>
                                <div>
                                    <ul>
                                        <li>30 June 2021</li>
                                        <li>Business</li>
                                        <li>Patners</li>
                                    </ul>
                                    <Link href="/shop" style={{ color: "white"}}><button>READ ARTICLE</button></Link>
                                </div>
                            </Col>
                        </Row>

                        <Row className="shop_img--item">
                            <Col span={8} className="shop_img">
                                <img src="/assets/img/shops/shop (5).png"/>
                            </Col>
                            <Col span={16} className="shop_description">
                                <p>Ogilvy lose the Philips international creative account after 10 years.</p>
                                <div>
                                    <ul>
                                        <li>30 June 2021</li>
                                        <li>Business</li>
                                        <li>Design</li>
                                        <li>Market</li>
                                    </ul>
                                    <button style={{border: "none", fontSize: 18, fontWeight: 500, padding: "18px 36px", backgroundColor: "#FF3600",  borderRadius: 30, color: "white", cursor: "pointer", marginTop: 40, }}>
                                        <Link href="/shop" style={{ color: "white"}}>READ ARTICLE</Link>
                                    </button>
                                     
                                </div>
                            </Col>
                        </Row>  */}
{/* 
                </div>
            </div> */} 
            {/* <Footer setMenu = {setPopupMenu} flag={popupMenu} setShowContactUs = {setShowContactUs}></Footer> */}
        </div>
    )
}

export default HomeInsights;