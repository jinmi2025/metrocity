import { Link } from "react-router-dom";
import './Gnb.css';

const Gnb = ({ setHoverBgHeight }) => {
    const handleDepth1MouseEnter = (e) => {
        const depth2El = e.currentTarget.querySelector('.depth2');
        // e.currentTarget 이벤트 처리 대상을 가리킴 
        // e.currentTarget.querySelector() 이벤트 처리 대상 영역의 특정 대상 선택
        const height = depth2El.getBoundingClientRect().height;
        // 대상.getBoundingClientRect() : 대상의 크기와 뷰포트 정보를 제공
        setHoverBgHeight(height);
    };

    const handleDepth1MouseLeave = () => {
        setHoverBgHeight(0);
    }

    return (
        <nav className="gnb">
            <ul>
                <li onMouseEnter={handleDepth1MouseEnter} onMouseLeave={handleDepth1MouseLeave}>
                    <Link to="/">EXCLUSIVE</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>HANDBAG</Link></li>
                                <li><Link to='/'>JEWELRY</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="has3" onMouseEnter={handleDepth1MouseEnter} onMouseLeave={handleDepth1MouseLeave}>
                    <Link to="/">WOMEN</Link>
                    <div className="depth2">
                        <div className="depth2-inner">
                            <div className="depth2-menu">
                                <ul>
                                    <li>
                                        <Link to='/'>BAG</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>BEST</Link></li>
                                                <li><Link to='/'>TOTE BAG</Link></li>
                                                <li><Link to='/'>SHOULDER BAG</Link></li>
                                                <li><Link to='/'>CROSS BAG</Link></li>
                                                <li><Link to='/'>MINI BAG</Link></li>
                                                <li><Link to='/'>CLUTCH BAG</Link></li>
                                                <li><Link to='/'>BACK PACK</Link></li>
                                                <li><Link to='/'>SHOWPIECE</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to='/'>SLG</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>BEST</Link></li>
                                                <li><Link to='/'>WALLET</Link></li>
                                                <li><Link to='/'>CARD WALLET</Link></li>
                                                <li><Link to='/'>OTHER</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to='/'>SHOES</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>RTW</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>OUTER</Link></li>
                                                <li><Link to='/'>TOP</Link></li>
                                                <li><Link to='/'>PANTS</Link></li>
                                                <li><Link to='/'>SKIRT</Link></li>
                                                <li><Link to='/'>ONE PIECE</Link></li>
                                                <li><Link to='/'>ACC</Link></li>
                                                <li><Link to='/'>SHOWPIECE</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="depth2-img">
                                <ul>
                                    <li><Link><img src="/assets/images/gnb-women1.jpg" alt="" /></Link></li>
                                    <li><Link><img src="/assets/images/gnb-women2.jpg" alt="" /></Link></li>
                                    <li><Link><img src="/assets/images/gnb-women3.jpg" alt="" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="has3" onMouseEnter={handleDepth1MouseEnter} onMouseLeave={handleDepth1MouseLeave}>
                    <Link to="/">MEN</Link>
                    <div className="depth2">
                        <div className="depth2-inner">
                            <div className="depth2-menu">
                                <ul>
                                    <li>
                                        <Link to='/'>BAG</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>BEST</Link></li>
                                                <li><Link to='/'>BACK PACK</Link></li>
                                                <li><Link to='/'>CLUTCH BAG</Link></li>
                                                <li><Link to='/'>CROSS BAG</Link></li>
                                                <li><Link to='/'>TOTE BAG</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to='/'>SLG</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>BEST</Link></li>
                                                <li><Link to='/'>WALLET</Link></li>
                                                <li><Link to='/'>CARD CASES</Link></li>
                                                <li><Link to='/'>KEY HOLDERS</Link></li>
                                                <li><Link to='/'>TECH ACCESSORIES</Link></li>
                                                <li><Link to='/'>BELT</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to='/'>SHOES</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>RTW</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>OUTER</Link></li>
                                                <li><Link to='/'>TOP</Link></li>
                                                <li><Link to='/'>PANTS</Link></li>
                                                <li><Link to='/'>ACC</Link></li>
                                                <li><Link to='/'>SHOWPIECE</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="depth2-img">
                                <ul>
                                    <li><Link><img src="/assets/images/gnb-men1.jpg" alt="" /></Link></li>
                                    <li><Link><img src="/assets/images/gnb-men2.jpg" alt="" /></Link></li>
                                    <li><Link><img src="/assets/images/gnb-men3.jpg" alt="" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="has3" onMouseEnter={handleDepth1MouseEnter} onMouseLeave={handleDepth1MouseLeave}>
                    <Link to="/">JEWELRY</Link>
                    <div className="depth2">
                        <div className="depth2-inner">
                            <div className="depth2-menu">
                                <ul>
                                    <li>
                                        <Link to='/'>BEST</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>ALL</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>RING</Link></li>
                                                <li><Link to='/'>EARRINGS</Link></li>
                                                <li><Link to='/'>NECKLACE</Link></li>
                                                <li><Link to='/'>BRACELET</Link></li>
                                                <li><Link to='/'>HAIR ACC</Link></li>
                                                <li><Link to='/'>OTHER</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to='/'>CUSTOM MADE</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>COLLECTION</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>M-BASIC</Link></li>
                                                <li><Link to='/'>ANELLO</Link></li>
                                                <li><Link to='/'>CORTE</Link></li>
                                                <li><Link to='/'>PSYCHE</Link></li>
                                                <li><Link to='/'>LUCE</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="depth2-img">
                                <ul>
                                    <li><Link><img src="/assets/images/gnb-jewelry1.jpg" alt="" /></Link></li>
                                    <li><Link><img src="/assets/images/gnb-jewelry2.jpg" alt="" /></Link></li>
                                    <li><Link><img src="/assets/images/gnb-jewelry3.jpg" alt="" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="has3" onMouseEnter={handleDepth1MouseEnter} onMouseLeave={handleDepth1MouseLeave}>
                    <Link to="/">WATCH</Link>
                    <div className="depth2">
                        <div className="depth2-inner">
                            <div className="depth2-menu">
                                <ul>
                                    <li><Link to='/'>BEST</Link></li>
                                    <li><Link to='/'>LEATHER</Link></li>
                                    <li><Link to='/'>METAL</Link></li>
                                    <li><Link to='/'>ETC</Link></li>
                                </ul>
                            </div>
                            <div className="depth2-img">
                                <ul>
                                    <li><Link><img src="/assets/images/gnb-watch1.jpg" alt="" /></Link></li>
                                    <li><Link><img src="/assets/images/gnb-watch2.jpg" alt="" /></Link></li>
                                    <li><Link><img src="/assets/images/gnb-watch3.jpg" alt="" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li onMouseEnter={handleDepth1MouseEnter} onMouseLeave={handleDepth1MouseLeave}>
                    <Link to="/">COLLECTION</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>FASHION</Link></li>
                                <li><Link to='/'>JEWELRY</Link></li>
                                <li><Link to='/'>TIMEPIECE</Link></li>
                                <li><Link to='/'>RTW</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li onMouseEnter={handleDepth1MouseEnter} onMouseLeave={handleDepth1MouseLeave}>
                    <Link to="/">ABOUT M</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>SIGNATURE</Link></li>
                                <li><Link to='/'>BRAND HISTORY</Link></li>
                                <li><Link to='/'>METROCITY NEWS</Link></li>
                                <li><Link to='/'>ARCHIVE</Link></li>
                                <li><Link to='/'>NOTICE</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li onMouseEnter={handleDepth1MouseEnter} onMouseLeave={handleDepth1MouseLeave}>
                    <Link to="/">MEMBERSHIP</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>ON-LINE</Link></li>
                                <li><Link to='/'>OFF-LINE</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
};

export default Gnb;