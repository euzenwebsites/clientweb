"use client"
import Header from '@/app/components/ui/Header';
import "../../components/stylessheets/Header.css"
import "../../components/stylessheets/About.css"
import { useState,useEffect } from 'react';
import AboutHeading from './AboutHeading';
import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';
import Man from "@/public/assets/img/man.png"
import PopupHeader from '@/app/components/ui/PopupHeader';

const AboutHero = ({ selectedMenu }) => {
    const [scrollEnd, setScrollEnd] = useState(false);
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
        }, 100);8

        const handleScroll = () => {
            const scrollTrigger = document.getElementById("about_header");
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
    console.log(selectedMenu === 1)

    return (
        <section className='w-[100%] flex justify-center ' id='about_header'>
            {
                popup && (<PopupHeader setSmallMenu = {setSmallMenu}/>)
            }
            <div className='w-[90%] border-b-2'>
 
                <Header showContactUs={showContactUs} setShowContactUs={setShowContactUs} selectedMenu={selectedMenu} />
                <AboutHeading />
                <div className='flex flex-col sm:flex-row mt-4'>

                    <div className='w-full relative'>
                        <div className='w-[100%] sm:w-[70%] mt-20 '>

                            <h3 className='font-bold text-3xl sm:text-5xl '>
                                ALWAYS AIMING TO PUSH BOUNDARIES AND EXCEED EXPECTATIONS WITH EVERY PROJECT.
                            </h3>
                        </div>

                        <div className='w-[50%]  font-bold text-xl sm:text-3xl mt-20 sm:mt-56 '>
                            <p>AVY Pruthi</p>
                            <p>Founder & CEO</p>
                        </div>
                    </div>

                    <RevealWrapper origin='right' delay={300} duration={3000} className='w-[100%] sm:w-[50%] mt-10 mr-20' >

                        <Image src={Man} />

                    </RevealWrapper>
                </div>


            </div>
        </section>
    )
}

export default AboutHero
