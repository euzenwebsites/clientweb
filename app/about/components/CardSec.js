import Card from '@/app/components/ui/Card'
import React from 'react'
import { Row, Col, Button, Input, Select } from "antd"
import "../../components/stylessheets/About.css"
const CardSec = () => {
  return (
    <section className='w-[100%] flex justify-center mt-20'>
        <div className='w-[90%]'>
        <Col span={24} className="card_container">
                    <div className="card_panel">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
        </Col>
        </div>
        
    </section>
  )
}

export default CardSec
