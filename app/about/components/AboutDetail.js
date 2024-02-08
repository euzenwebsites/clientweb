"use client"
import React, { useState } from 'react';
import "../../components/stylessheets/About.css"
import Reveal from '@/app/components/utils/Reveal'
import ButtonFlip from '@/app/components/utils/ButtonFlip'
import ContactUsBtn from '@/app/components/ui/ContactUsBtn'
const AboutDetail = () => {
    const [showContactUs, setShowContactUs] = useState(false);

    return (
        <section className='w-[100%] flex justify-center mb-10'>
            <div className="w-[90%] detail_text">
                <div className='flex flex-col sm:flex-row gap-10'>
                    
                    <div className='text-xl font-normal sm:font-medium' >
                        <Reveal>
                            <p>
                                After a decade managing projects globally for creative agencies across four continents, the pandemic led me to a transformative decision. I bid farewell to my corporate role to wholeheartedly pursue my true passion: sparking inspiration for clients.
                            </p><br></br>
                        </Reveal>
                        <Reveal>
                            <p>
                                I excel in revealing a brand&apos;s unique appeal and turning concepts into reality. Building lasting connections is my philosophy.
                            </p><br></br>
                        </Reveal>
                        <Reveal>
                            <p>
                                My work spans various sectors, from manufacturing to fintech and luxury to transportation, and I&apos;ve earned recognition with seven prestigious awards along the way.
                            </p><br></br>
                        </Reveal>
                    </div>

                    <div className='max-sm:mt-10'>
                        <Reveal>
                            <p className='font-bold text-3xl sm:text-5xl mt-8'>
                                Avy partners with select strategists, storytellers, designers and content creators on complex projects on a per-need basis
                            </p>
                        </Reveal>
                        <div className='mt-10 w-[100%]'>
                            <ContactUsBtn type={true} showContactUs={showContactUs} setShowContactUs={setShowContactUs}
                                text="WORK WITH US" />
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}

export default AboutDetail
