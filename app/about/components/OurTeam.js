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
                 <Member leaveImg="/assets/img/members/doodle-ed-normal.png" hoverImg="/assets/img/members/doodle-ed-mouseover.png" />
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-kay-normal.png" hoverImg="/assets/img/members/doodle-kay-mouseover.png" />
                </Col>
                
            </Row>

            <Row style={{marginTop: 60}}>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-marlene-normal.png" hoverImg="/assets/img/members/doodle-marlene-mouseover.png" />
                    
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-sample-avy-normal.png" hoverImg="/assets/img/members/doodle-sample-avy-mouseover.png" />
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-shiraz-normal.png" hoverImg="/assets/img/members/doodle-shiraz-mouseover.png" />
                </Col>
            </Row>

            <Row style={{ marginTop: 60}}>
                <Col lg={4} sm={0} xs={0}/>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-bijo-normal.png" hoverImg="/assets/img/members/doodle-bijo-mouseover.png" />
                    
                </Col>
                <Col lg={8} sm={24} xs={24} style={{ padding: 20}}>
                <Member leaveImg="/assets/img/members/doodle-raka-normal.png" hoverImg="/assets/img/members/doodle-raka-mouseover.png" />
                </Col>
                
            </Row>
        </div>
    </section>
  )
}

export default OurTeam
