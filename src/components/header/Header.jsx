import { useState } from "react";
import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import HeadUtils from "./HeadUtils";
import './Header.css';

const Header = () => {
    const [hoverBgHeight, setHoverBgHeight] = useState(0);

    return (
        <header id="header">
            <div className="header_inner">
                <div className="header_left">
                    <h1 className="logo"><Link to=''><img src="/assets/images/metro_logo.png" alt="메트로시티" /></Link></h1>
                    <Gnb setHoverBgHeight={setHoverBgHeight} />
                </div>
                <HeadUtils />
            </div>
            <div className="hover-bg" style={{ height: hoverBgHeight }}></div>
        </header>
    )
};

export default Header;