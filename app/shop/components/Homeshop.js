"use client"
import React, { useEffect, useState } from "react";
import "../../components/stylessheets/ShopIntro.css"
import Link from "next/link";
import { Col, Row } from "antd";
import Header from "@/app/components/ui/Header"
import PopupHeader from "@/app/components/ui/PopupHeader"
import ReadyToWork from "@/app/components/ui/ReadyToWork.js"
import Footer from "@/app/components/ui/Footer.js"
import InsightSec from "@/app/insights/components/InsightSec";
import InsightsSec from "./InsightsSec";

function HomeShop({ selectedMenu }) {
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

        const handleScroll = () => {
            const scrollTrigger = document.getElementById("shop_header");
            const triggerPosition = scrollTrigger.getBoundingClientRect().bottom;
            console.log(triggerPosition);
            if (triggerPosition < 50) {
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
        <section className="w-[100%] flex justify-center ">
            <div className="w-[90%]" >
                <Header showContactUs={showContactUs} setShowContactUs={setShowContactUs} selectedMenu={selectedMenu} />

                <div className=" flex flex-col gap-8 mt-10">

                    <div id="shop_header">
                        <img src="/assets/img/shops/shop1_detail.png" className="max-sm:h-[100vh] object-cover" />
                    </div>

                    <div>
                        <h1 className="font-bold text-2xl sm:text-5xl ">AVY Pruthi, Nuneaton business owner – Coventry & Warwickshire Chamber workshops</h1>
                    </div>

                    <div className='sm:mt-2  flex flex-col sm:flex-row justify-between max-sm:items-start'>
                        <ul className='flex flex-row items-center gap-10 text-gray font-bold max-sm:py-4'>
                            <li>30 June 2021</li>
                            <li className='border-l border-l-gray pl-4'>Business</li>
                            <li className='border-l border-l-gray pl-4'>Design</li>
                        </ul>
                        <div className="links">
                            <span>Share: </span>
                            <Link href="/"><img src="/assets/img/icons/fa6-brands_square-x-twitter.png"></img></Link>
                            <Link href="/"><img src="/assets/img/icons/mdi_facebook.png"></img></Link>
                            <Link href="/"><img src="/assets/img/icons/mdi_linkedin.png"></img></Link>
                            <Link href="/"><img src="/assets/img/icons/mdi_share-variant.png"></img></Link>
                        </div>
                    </div>


                    {
                        popup && (<PopupHeader setSmallMenu={setSmallMenu} />)
                    }
                    <div className="font-medium text-lg sm:text-xl">
                        <p>
                            New and small business owners in Nuneaton and Bedworth can benefit from a series of free clinics.<br></br>
                            The clinics, presented by Coventry and Warwickshire Chamber of Commerce are fully funded and aim to help people who want to start a business and micro business owners who have started one in the last 24 months.<br></br>
                            One Nuneaton based business owner who has gained is Avy Pruthi, who has set up a design and digital experiences company called Avy Consultancy.
                            <br></br>
                            <br></br>
                            Through the sessions and access to a wide programme of masterclasses and workshops, he is now director of a business that helps bring businesses to life using creative design for all touch-points.<br></br>
                            The business continues to grow and is pushing forward with plans for further growth. <br></br>Avy was introduced to the Coventry & Warwickshire Chamber of Commerce’s Start-Up Programme in February after deciding to resign from full-time employment to pursue his dream of starting his own business.<br></br>
                            Avy felt it was time to act on his passion for design and dream of being a business owner and explained:.
                        </p>
                    </div>


                    <InsightsSec />
                </div>
                <Footer setMenu={setSmallMenu} flag={showSmallMenu} setShowContactUs={setShowContactUs}></Footer>
            </div>
        </section>
    );
}
export default HomeShop;