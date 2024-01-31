import Card from '@/app/components/ui/Card'
import React from 'react'
import { Row, Col, Button, Input, Select } from "antd"
import "../../components/stylessheets/About.css"
import HorizontalScroll from '@/app/components/utils/HorizontalScroll'
const CardSec = () => {
  return (
    <section className='w-[100%] flex justify-center '>
        <div className='w-[90%]'>
                    <div >
                      <HorizontalScroll>
                        <Card/>
                        <Card/>
                        <Card/>
                      </HorizontalScroll>
                    </div>
       
        </div>
        
    </section>
  )
}

export default CardSec
