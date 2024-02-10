import Card from '@/app/components/ui/Card'
import React from 'react'
import { Row, Col, Button, Input, Select } from "antd"
import "../../components/stylessheets/About.css"
import HorizontalScroll from '@/app/components/utils/HorizontalScroll'
import HorizontalScrollSection from '@/app/components/utils/HorizontalScrollSection'
const CardSec = () => {
  return (
    <section className='w-[100%] flex justify-center max-sm:mt-10'>
        <div className='w-[90%]'>
                    <div >
                      <HorizontalScrollSection>
                        <Card/>
                        <Card/>
                        <Card/>
                      </HorizontalScrollSection>
                    </div>
       
        </div>
        
    </section>
  )
}

export default CardSec
