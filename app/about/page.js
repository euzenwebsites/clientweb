import React from 'react'
import HomeAbout from './components/HomeAbout'
import AboutHero from './components/AboutHero'
import AboutDetail from './components/AboutDetail'
import LeftHeading from '../components/ui/LeftHeading'
import PhilosophySec from './components/PhilosophySec'
import PhilosophyItem from '../components/ui/PhilosophyItem'
import CardSec from './components/CardSec'
import OurTeam from './components/OurTeam'
import CTABanner from '../components/ui/CTABanner'
import ReadyToWork from '../components/ui/ReadyToWork'
import SmoothScroll from '../components/utils/SmoothScroll'
const page = () => {
  return (
    <div>
      <SmoothScroll>
      <AboutHero/>
      <AboutDetail/>
      <LeftHeading heading="philosophy" />
      <PhilosophySec/>
      <LeftHeading heading="WHAT PEOPLE SAY ABOUT US" />
      <CardSec/>
      <LeftHeading heading="our team" />
      <OurTeam/>
      <CTABanner/>
      <ReadyToWork/>

      <HomeAbout/>
      </SmoothScroll>
    </div>
  )
}

export default page
