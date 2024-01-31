import React from 'react'
import "../../components/stylessheets/About.css"
import Reveal from '../utils/Reveal'

const Card = () => {
  return (
<div className="card_item">
        <div className="dashed-line">
        <hr/>
        <span>WEB-DESIGN</span>
        <hr/>
    </div>
    <div className="card_item--text">
        <Reveal>
        <p>K FARMAH</p>
        </Reveal>
        <span>DENTIST / PRINCIPAL AT HOUSE OF DENTAL</span>
        <Reveal>
        <p>
        Great service from the team at AVY! Needed help with refreshing an old website and creating a new landing page. Nothing was too much of a hassle for them to sort out and were happy to accommodate my demanding needs. Very responsive to communication and well priced. Overall a flawless experience and will be using this agency again. Thank you to the team at AVY!
        </p>
        </Reveal>
    </div>
</div>
  )
}

export default Card
