"use client"
import Header from '@/app/components/ui/Header';
import "../../components/stylessheets/Header.css"
import "../../components/stylessheets/About.css"
import { useState } from 'react';
import AboutHeading from './AboutHeading';
import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';
import Man from "@/public/assets/img/man.png"


const AboutHero = ({ selectedMenu }) => {
    const [scrollEnd, setScrollEnd] = useState(false);
    const [popup, setPopup] = useState(false);
    const [showSmallMenu, setSmallMenu] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);

    return (
        <section className='w-[100%] flex justify-center '>
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
