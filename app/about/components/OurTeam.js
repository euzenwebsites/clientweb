import React from 'react'
import { Row, Col, } from "antd"
import Member from '@/app/components/Member'

const OurTeam = () => {
  return (
    <section className='w-[100%] flex justify-center mt-20'>
        <div className='w-[90%]'>
             
        <Row className="members_list"> 
                <Col lg={4} sm={0} xs={0} />

                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                 <Member leaveImg="/assets/img/members/doodle-ed-normal.png" hoverImg="/assets/img/members/doodle-ed-mouseover.png" 
                 name="ed" designation="head of design"/>
                </Col>

                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-kay-normal.png" hoverImg="/assets/img/members/doodle-kay-mouseover.png" 
                name="kay" designation="print"/>
                </Col>
                
            </Row>

            <Row style={{marginTop: 60}}>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-marlene-normal.png" hoverImg="/assets/img/members/doodle-marlene-mouseover.png" 
                name="marlene" designation="motion designer"/>
                    
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-sample-avy-normal.png" hoverImg="/assets/img/members/doodle-sample-avy-mouseover.png" 
                name="avy" designation="founder"/>
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-shiraz-normal.png" hoverImg="/assets/img/members/doodle-shiraz-mouseover.png"
                 name="shiraz" designation="motion & VFX"/>
                </Col>
            </Row>

            <Row style={{ marginTop: 60}}>
                <Col lg={4} sm={0} xs={0}/>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-bijo-normal.png" hoverImg="/assets/img/members/doodle-bijo-mouseover.png" 
                name="bijo" designation="front end developer"/>
                    
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-raka-normal.png" hoverImg="/assets/img/members/doodle-raka-mouseover.png" 
                name="raka" designation="UI/UX designer"/>
                </Col>
                
            </Row>
        </div>
    </section>
  )
}

export default OurTeam
