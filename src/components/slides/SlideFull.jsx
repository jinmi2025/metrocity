import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import './SlideFull.css';

const BtnPrev = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
    )
}

const BtnNext = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <FontAwesomeIcon icon={faArrowRight} />
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
        prevArrow: <BtnPrev />
    };
    return (
        <div className="SlideFull">
            <Slider {...settings}>
                {banner.map((bn, idx) =>
                    <div key={idx}><img src={bn} /></div>
                )}
            </Slider>
        </div>
    )
};

export default SlideFull;