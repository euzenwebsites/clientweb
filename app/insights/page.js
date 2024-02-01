import React from 'react'
import HomeInsights from './components/HomeInsights'
import InsightSec from './components/InsightSec'

import MainFooter from '../components/ui/MainFooter'
import SmoothScroll from '../components/utils/SmoothScroll'

const page = () => {
  return (
    <div>
      <SmoothScroll/>
      <HomeInsights/>
      <InsightSec/> 
      <MainFooter/>
     
      

    </div>
  ) 
}

export default page
