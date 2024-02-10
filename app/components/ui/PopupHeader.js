
import Link from "next/link";
import "../stylessheets/PopupHeader.css"
import { Row,Col } from "antd";
function PopupHeader(props) {
    return (
        <>
        <div>
            <div className={`popup_header`}>
                <div>
                    <Link href="/"><img src="/icon.png"></img></Link>

                    <img src="/assets/img/icons/mdi_menu.png" onClick={() => {
                        props.setSmallMenu(true);
                    }}></img>

                </div>

            </div>
        </div>

        </>

    );
}

export default PopupHeader;