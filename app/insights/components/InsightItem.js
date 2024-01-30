import React from 'react'
import { Button, Col, Row } from "antd";
import "../../components/stylessheets/Insights.css"
import Link from 'next/link';

const InsightItem = () => {
  return (
    <div>
      <Row className="shop_img--item">
                            <Col span={8} className="shop_img">
                                <img src="/assets/img/shops/shop (1).png"/>
                            </Col>
                            <Col span={16} className="shop_description">
                                <p>AVY Pruthi, Nuneaton business owner – Coventry & Warwickshire Chamber workshops</p>
                                <div>
                                    <ul>
                                        <li>30 June 2021</li>
                                        <li>Business</li>
                                    </ul>
                                    
                                        <Link href="/shop" className='bg-orange p-4 font-bold text-white rounded-full'>READ ARTICLE</Link>
                                    
                                </div>
                            </Col>
                        </Row>
    </div>
  )
}

export default InsightItem
