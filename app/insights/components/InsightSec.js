"use client"
import { useEffect, useState } from 'react'
import InsightItem from './InsightItem'
import "../../components/stylessheets/Insights.css"
import Footer from '@/app/components/ui/Footer'
import PopupHeader from '@/app/components/ui/PopupHeader'
const InsightSec = () => {

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
    <section className='w-[100%] flex flex-col items-center justify-center gap-10 mt-8 sm:mt-20'>
      <div className='w-[90%]'>

        <div className="flex sm:flex-row flex-col gap-4 sm:gap-8 text-xs">
          <ul className="flex flex-row gap-4 sm:gap-8 font-semibold ">
            <li className='text-orange'>ALL</li>
            <li className='hover:text-orange'>BUSINESS</li>
            <li className='hover:text-orange'>DESIGN</li>
            <li className='hover:text-orange'>LOGO IDENITY</li>
          </ul>
          <ul className="flex flex-row gap-4 sm:gap-8 font-semibold ">
            <li className='hover:text-orange'>MARKET</li>
            <li className='hover:text-orange'>MOTION</li>
            <li className='hover:text-orange'>PARTNERS</li>
            <li className='hover:text-orange'>VIDEOS</li>
          </ul>
        </div>

        <div className="mt-10">
          <InsightItem />
          <InsightItem />
          <InsightItem />
          <InsightItem />
          <InsightItem />
        </div>

      </div>

     
        <div className="w-full" >
          {
            popup && (<PopupHeader setSmallMenu={setSmallMenu} />)
          }
          <Footer setMenu={setSmallMenu} flag={showSmallMenu} setShowContactUs={setShowContactUs}></Footer>

        </div>
     


    </section>
  )
}

export default InsightSec
