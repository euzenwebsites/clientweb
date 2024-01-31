"use client"
import React, {useState} from "react";
import Reveal from "./utils/Reveal";

function Member(props) {

    const [isHovered, setIsHovered] = useState(false);
    const hoverImg = props.hoverImg;
    const leaveImg = props.leaveImg; 
    return (
        <div className="member_avatar" 
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img src={isHovered ? hoverImg : leaveImg} />
            <div>
                <Reveal>
                <p>ED</p>
                </Reveal>
                
                <Reveal>
                <span>HEAD OF DESIGN</span>
                </Reveal>
            </div>
                <p style={{display: isHovered ? "block": "none"}}>Lörem ipsum hypogt kromyras som bede inte nyn. Hel vire madigt lad i digitalbox. Meganing abel, burkini faning. 
                </p>
        </div>
    );
}

export default Member;