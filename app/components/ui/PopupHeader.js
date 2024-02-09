import React, { useState } from "react"
import Link from "next/link";
import "../stylessheets/PopupHeader.css"
import { Col, Row } from "antd";

function PopupHeader(props) {
    return (
        <div>
            <div className={`popup_header`}>
                <div>
                    <Link href="/"><img src="/icon.png"></img></Link>
                    <ul>
                        <li onClick={() => {
                            props.setSmallMenu(true);
                        }}>
                            <img src="/assets/img/icons/mdi_menu.png"></img>
                        </li>

                    </ul>
                </div>

            </div>
        </div>

    );
}

export default PopupHeader;