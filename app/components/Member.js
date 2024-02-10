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
            <div className="uppercase">
                <h3 className="font-bold text-3xl sm:text-5xl">{props.name}</h3>
                <h6 className="mt-4 text-gray font-bold text-lg sm:text-xl ">{props.designation}</h6>
            </div>
                <p style={{display: isHovered ? "block": "none"}}>Lörem ipsum hypogt kromyras som bede inte nyn. Hel vire madigt lad i digitalbox. Meganing abel, burkini faning. 
                </p>
        </div>
    );
}

export default Member;