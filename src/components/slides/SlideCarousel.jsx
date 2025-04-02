import { useRef, useEffect } from "react";
import Slider from "react-slick";
import { ItemCard } from "../card";
import "slick-carousel/slick/slick.css";
import "./SlideCarousel.css";

const SlideCarousel = ({ items }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (sliderRef.current) {
                sliderRef.current.slickGoTo(0);
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        initialSlide: 0, // 기본 슬라이드를 0번으로 명시
        responsive: [
            {
                breakpoint: 1279, // 화면의 너비값이 1279px 이하일 때 셋팅
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '24px',
                    initialSlide: 0
                }
            },
            {
                breakpoint: 767, // 화면의 너비값이 767px 이하일 때 셋팅
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '36px',
                    initialSlide: 0
                }
            }
        ]
    }

    return (
        <Slider {...settings} ref={sliderRef}>
            {items.map(item =>
                <ItemCard key={item.id} product={item} />
            )}
        </Slider>
    )
};

export default SlideCarousel;