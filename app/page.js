import React from 'react'
import Home from './components/Home'
import Hero from './components/Hero'
import LeftHeading from './components/ui/LeftHeading'
import CEOSec from './components/CEOSec'
import TestimonialSec from './components/TestimonialSec'
import Service from './components/Service'
import HowWeDoSec from './components/HowWeDoSec'
import Client from './components/Client'
import Accordion from './components/Accordion'
import CTABanner from './components/ui/CTABanner'
import ReadyToWork from './components/ui/ReadyToWork'
import SmoothScroll from './components/utils/SmoothScroll'
import CoreValues from './components/CoreValues'
const page = () => {
  return (
    <div>
                <SmoothScroll> 
                <Hero/> 
                <CoreValues/>
                <LeftHeading heading="let's begin"/>
                <CEOSec/>
                <LeftHeading heading="how we think lorem ipsum"/>
                <TestimonialSec/>
                <LeftHeading heading="services that we offer"/>
                <Service/>   
                <Service/>
                <Service/> 
                <LeftHeading heading="how we do things"/>
                <HowWeDoSec/>
                <LeftHeading heading="clients we have work with"/>
                <Client/>
                <Accordion/>
                <CTABanner/>
                <ReadyToWork/>
      <Home/>
      </SmoothScroll>
    </div>
  )
}

export default page
