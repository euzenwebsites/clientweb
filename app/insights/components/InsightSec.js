import React from 'react'
import InsightItem from './InsightItem'
import "../../components/stylessheets/Insights.css"
const InsightSec = () => {
  return (
    <section className='w-[100%] flex justify-center gap-10 mt-20'>
        <div className='w-[90%]'>

        <div className="flex sm:flex-row flex-col gap-4 sm:gap-8 ">
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
        <InsightItem/>
        <InsightItem/>
        <InsightItem/>
        <InsightItem/>
        <InsightItem/>
        </div>

        </div>

    </section>
  )
}

export default InsightSec
