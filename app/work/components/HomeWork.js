"use client"
import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Button } from "antd"
import "../../components/stylessheets/About.css"
import "../../components/stylessheets/OurWork.css"
import Header from "@/app/components/ui/Header"
import PopupHeader from "@/app/components/ui/PopupHeader"
import ReadyToWork from "@/app/components/ui/ReadyToWork.js"
import Footer from "@/app/components/ui/Footer.js"
import Image from "next/image";
import WorkItem from "./WorkItem";
import WorkHeading from "./WorkHeading";
import CTABanner from "@/app/components/ui/CTABanner";
import workImg from "@/public/assets/img/1.png"
function HomeWork({ selectedMenu }) {

    const [imgNum, setImgNum] = useState(1);
    const [imgDetai, setImgDetail] = useState(false);
    const [contactus, setContactUs] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const img1 = useRef();
    const img2 = useRef();
    const img3 = useRef();
    const img4 = useRef();
    const img5 = useRef();
    const [popup, setPopup] = useState(false);
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
            const scrollTrigger = document.getElementById("our_work--header");
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
        <section className="w-[100%] flex flex-col justify-center items-center" >
            <div className="w-[90%]">
                <div className="w-full" id="our_work--header">
                <Header showContactUs={showContactUs} setShowContactUs={setShowContactUs} selectedMenu={selectedMenu} />
                <WorkHeading />
                </div>

                <div className="">
                {
                    popup && (<PopupHeader setSmallMenu={setSmallMenu} />)
                }

                    <div className="ourwork_img">
                        <div className={`img_item ${imgNum === 6 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
                            setImgNum(6)
                            setImgDetail(true);
                        }}>
                            <div ref={img1} className="flex flex-row gap-8 ">
                                <div>
                                    <p className='number-circle'>01</p>
                                </div>
                                <div>
                                    <h3 className="uppercase text-lg sm:text-4xl font-bold ">BLK pizza </h3>
                                    <p className="uppercase font-medium text-lg sm:text-xl">branding</p>
                                </div>
                            </div>

                        </div>

                        <div className={`img_item ${imgNum === 2 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
                            setImgNum(2)
                            setImgDetail(true);
                        }}>
                            <div ref={img2} className="flex flex-row gap-8 ">
                                <div>
                                    <p className='number-circle'>02</p>
                                </div>
                                <div>
                                    <h3 className="uppercase text-lg sm:text-4xl font-bold ">BLK pizza </h3>
                                    <p className="uppercase font-medium text-base sm:text-xl">branding</p>
                                </div>
                            </div>

                        </div>

                        <div className={`img_item ${imgNum === 3 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
                            setImgNum(3)
                            setImgDetail(true)
                        }}>
                            <div ref={img3} className="flex flex-row gap-8 ">
                                <div>
                                    <p className='number-circle'>03</p>
                                </div>
                                <div>
                                    <h3 className="uppercase text-lg sm:text-4xl font-bold ">samply & sons</h3>
                                    <p className="uppercase font-medium text-base sm:text-xl">branding</p>
                                </div>
                            </div>
                        </div>

                        <div className={`img_item ${imgNum === 4 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
                            setImgNum(4)
                            setImgDetail(true);
                        }}>
                            <div ref={img4} className="flex flex-row gap-8 ">
                                <div>
                                    <p className='number-circle'>04</p>
                                </div>
                                <div>
                                    <h3 className="uppercase text-lg sm:text-4xl font-bold ">little bobbins boutiques</h3>
                                    <p className="uppercase font-medium text-base sm:text-xl">branding & print</p>
                                </div>
                            </div>
                        </div>

                        <div className={`img_item ${imgNum === 5 ? "img_item--show" : "img_item--hidden"}`} onClick={(e) => {
                            setImgDetail(true)
                            setImgNum(5)
                        }}>
                            <div ref={img5} className="flex flex-row gap-8 ">
                                <div>
                                    <p className='number-circle'>05</p>
                                </div>
                                <div>
                                    <h3 className="uppercase text-lg sm:text-4xl font-bold ">BLK pizza </h3>
                                    <p className="uppercase font-medium text-base sm:text-xl">branding</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                


                <div className={`img_item--detail ${imgDetai ? "img_item--detail-show" : "item_item--detail-hidden"}`}>
                    <div>

                    </div>

                    <div className="img_detail--header">
                        <div>
                            <h1 className="font-bold text-3xl sm:text-5xl">BLK PIZZA</h1>
                            <p className="text-gray  sm:mt-8 uppercase font-bold text-xl sm:text-3xl">BRANDING</p>
                        </div>
                        <Button size="large" danger shape="round" onClick={(e) => setImgDetail(false)}>CLOSE</Button>
                    </div>

                    <div className="img_detail--content text-black">
                        <div className="project_container">
                            <div className="project">
                                <h3 className="font-bold text-xl sm:text-3xl">PROJECT</h3>
                                <p className="text-black">CLIENT: LOREM IPSUM</p>
                                <p>YEAR: 2023</p>
                            </div>
                            <div className="service">
                                <h3 className="font-bold text-xl sm:text-3xl">SERVICE</h3>
                                <p>BRANDING</p>
                            </div>
                        </div>
                        <div className="challenge_container">
                            <h3 className="font-bold text-xl sm:text-3xl">CHALLENGE</h3>
                            <p>Lörem ipsum demödade märk-dna: pensionärskuvös än aras ovina. Trumpifiering intraskade nende i tuspeska tekagon. Reskapet aberen vyr agnostigen, i ter. Pegt giganösm elykovament. </p>
                        </div>
                        <div className="img_list">
                            <div className="main_img">
                                <Image src={workImg} />
                            </div>

                            <div className=" grid grid-cols-2 gap-8 mt-8">
                                <Image src={workImg} />
                                <Image src={workImg} />
                            </div>
                        </div>
                        <div className="approach_container">
                            <h3 className="font-bold text-xl sm:text-3xl">APPROACH</h3>
                            <p>Lörem ipsum demödade märk-dna: pensionärskuvös än aras ovina. Trumpifiering intraskade nende i tuspeska tekagon. Reskapet aberen vyr agnostigen, i ter. Pegt giganösm elykovament. </p>
                        </div>
                        <div className="mt-10">
                            <Image src={workImg} />
                        </div>
                        <div className="result_container">
                            <h3 className="font-bold text-xl sm:text-3xl">RESULT</h3>
                            <p>Lörem ipsum demödade märk-dna: pensionärskuvös än aras ovina. Trumpifiering intraskade nende i tuspeska tekagon. Reskapet aberen vyr agnostigen, i ter. Pegt giganösm elykovament. </p>
                        </div>
                        <div className="py-20 text-center">
                            <h3 className="font-bold text-3xl sm:text-5xl">BLKPIZZA.COM</h3>
                        </div>
                    </div>

                </div>

                <div className={`overlay ${imgDetai ? "overlay-show" : "overlay-hidden"}`} onClick={() => {
                    setImgDetail(false);
                }}></div>
            </div>
            <CTABanner />
            <ReadyToWork />
            <Footer setMenu={setSmallMenu} flag={showSmallMenu} setShowContactUs={setShowContactUs}></Footer>
        </section>
    );
}

export default HomeWork;
