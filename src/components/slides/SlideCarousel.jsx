import Slider from "react-slick";
import { ItemCard } from "../card";
import "slick-carousel/slick/slick.css";
import "./SlideCarousel.css";

const SlideCarousel = ({ items }) => {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4
    }

    return (
        <Slider {...settings}>
            {items.map(item =>
                <ItemCard key={item.id} product={item} />
            )}
        </Slider>
    )
};

export default SlideCarousel;