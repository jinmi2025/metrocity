import { useState } from "react";
import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import HeadUtils from "./HeadUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
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
                <div className="mobile-icons">
                    <p className="mo-open-search"><button><FontAwesomeIcon icon={faSearch} /></button></p>
                    <p className="mo-open-cart"><button><FontAwesomeIcon icon={faCartShopping} /></button></p>
                    <p className="mo-open-side"><button><FontAwesomeIcon icon={faBars} /></button></p>
                </div>
                <HeadUtils />
            </div>
            <div className="hover-bg" style={{ height: hoverBgHeight }}></div>
        </header>
    )
};

export default Header;