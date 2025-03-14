import { useState, useEffect } from "react";
import axios from "axios";
import { SlideFull, SlideCarousel } from "../../components/slides";
import { MainCard } from "../../components/card";
import "./Main.css";

const Main = () => {
    const mainSlideBn = [
        "/assets/images/main01-1.jpg",
        "/assets/images/main01-2.jpg"
    ];
    const mainCardData = {
        mb2x21: {
            src: "/assets/images/main02-1.jpg",
            title: "WOMEN",
            text: "SPECIAL COLLECTION",
            href: ''
        },
        mb2x22: {
            src: "/assets/images/main02-2.jpg",
            title: "MEN",
            text: "SPECIAL COLLECTION",
            href: ''
        },
        mb2x1: {
            src: "/assets/images/main02-3.jpg",
            title: "HERITAGE COLLECTION",
            text: "",
            href: ''
        },
        mb4x21: {
            src: "/assets/images/main04-1.jpg",
            title: "JEWELRY",
            text: "JEWELRY COLLECTION",
            href: ''
        },
        mb4x22: {
            src: "/assets/images/main04-2.jpg",
            title: "TIMEPIECE",
            text: "TIMEPIECE COLLECTION",
            href: ''
        },
        mb4x1: {
            src: "/assets/images/main04-3.jpg",
            title: "READY TO WEAR",
            text: "RTW COLLECTION",
            href: ''
        },
        mb6x1: {
            src: "/assets/images/main06.jpg",
            title: "METROCITY BENEFIT",
            text: "Membership Exclusive Benefit",
            href: ''
        }
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/products.json');
                const productsData = response.data.products;
                const flatProducts = productsData.flatMap(product =>
                    product.variants.map(variant => (
                        {
                            ...product.model,
                            ...variant
                        }
                    ))
                );
                setProducts(flatProducts)
            } catch (error) {
                console.error('메인페이지 상품데이터 로딩 오류 : ', error);
            }
        };
        fetchData();
    }, []);

    const bagList = products.filter(product => product.cate_no == 101);
    const walletList = products.filter(product => product.cate_no == 105);

    return (
        <div className="Main">
            <section className="main-slide">
                <SlideFull banner={mainSlideBn} />
            </section>
            <section className="main-banner">
                <div className="x2">
                    <MainCard
                        src={mainCardData.mb2x21.src} title={mainCardData.mb2x21.title}
                        text={mainCardData.mb2x21.text} href={mainCardData.mb2x21.href}
                    />
                    <MainCard
                        src={mainCardData.mb2x22.src} title={mainCardData.mb2x22.title}
                        text={mainCardData.mb2x22.text} href={mainCardData.mb2x22.href}
                    />
                </div>
                <div className="x1">
                    <MainCard
                        src={mainCardData.mb2x1.src} title={mainCardData.mb2x1.title}
                        text={mainCardData.mb2x1.text} href={mainCardData.mb2x1.href}
                    />
                </div>
            </section>
            <section className="main-carousel">
                <SlideCarousel items={bagList} />
            </section>
            <section className="main-banner">
                <div className="x2">
                    <MainCard
                        src={mainCardData.mb4x21.src} title={mainCardData.mb4x21.title}
                        text={mainCardData.mb4x21.text} href={mainCardData.mb4x21.href}
                    />
                    <MainCard
                        src={mainCardData.mb4x22.src} title={mainCardData.mb4x22.title}
                        text={mainCardData.mb4x22.text} href={mainCardData.mb4x22.href}
                    />
                </div>
                <div className="x1">
                    <MainCard
                        src={mainCardData.mb4x1.src} title={mainCardData.mb4x1.title}
                        text={mainCardData.mb4x1.text} href={mainCardData.mb4x1.href}
                    />
                </div>
            </section>
            <section className="main-carousel">
                <SlideCarousel items={walletList} />
            </section>
            <section className="main-banner">
                <div className="x1">
                    <MainCard
                        src={mainCardData.mb6x1.src} title={mainCardData.mb6x1.title}
                        text={mainCardData.mb6x1.text} href={mainCardData.mb6x1.href}
                    />
                </div>
            </section>
        </div>
    )
};

export default Main;