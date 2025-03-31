import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import './SlideFull.css';

const BtnPrev = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
    )
}

const BtnNext = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    )
}

const SlideFull = ({ banner }) => {
    const settings = {
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        dots: true,
        nextArrow: <BtnNext />,
        prevArrow: <BtnPrev />,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    arrows: false
                }
            }
        ]
    };
    return (
        <div className="SlideFull">
            <Slider {...settings}>
                {banner.map((bn, idx) =>
                    <div key={idx}>
                        <img src={bn.pc} className="pc" />
                        <img src={bn.mo} className="mo" />
                    </div>
                )}
            </Slider>
        </div>
    )
};

export default SlideFull;