import React from 'react'
import InsightItem from './InsightItem'
import "../../components/stylessheets/Insights.css"
const InsightSec = () => {
  return (
    <section className='w-[100%] flex justify-center gap-10 mt-20'>
        <div className='w-[90%]'>

        <div className="shop_list">
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
        </div>
        
        <div className="shop_img--list">
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
