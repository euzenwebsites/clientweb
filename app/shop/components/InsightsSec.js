import React from 'react'
import LatestInsights from './LatestInsights'

const InsightsSec = () => {
  return (
    <section className='mb-40'>
        <div>
            <div className='mt-10 mb-20 '>
                <h3 className='font-bold text-2xl sm:text-5xl uppercase'>latest insights </h3>
            </div>
            <div className='flex flex-col sm:flex-row gap-10 '>
                <LatestInsights/>
                <LatestInsights/>
                <LatestInsights/>
            </div>
        </div>
    </section>
  )
}

export default InsightsSec
