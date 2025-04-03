import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import { Breadcrumb, ImgSection, InfoSection } from '../../components/pages';

import "./ProductDetail.css";

const ProductDetail = () => {
    const [searchParams] = useSearchParams();
    const mainCate = searchParams.get("main_cate");
    const subCate = searchParams.get("sub_cate");
    const detailCate = searchParams.get("detail_cate");
    const productId = searchParams.get("product_id");

    // 상품 상세 내역
    const [product, setProduct] = useState({});
    // 다른 색상 제품 관리
    const [otherVariants, setOtherVariants] = useState([]);

    useEffect(() => {
        axios.get("/data/products.json")
            .then(response => {
                return response.data.products;
            })
            .then(data => {
                const flattedProduct = data
                    .flatMap(product => {
                        return product.variants.map(variant => (
                            {
                                ...product.model,
                                ...variant
                            }
                        ))
                    })

                const targetProduct = flattedProduct.find(product =>
                    parseInt(product.id) === parseInt(productId)
                );

                const colorVariants = flattedProduct.filter(product =>
                    parseInt(product.model_id) === parseInt(targetProduct.model_id) && product.color !== targetProduct.color
                )

                setProduct(targetProduct);
                if (colorVariants.length > 0) setOtherVariants(colorVariants);
            })
            .catch(error => {
                console.log("상세페이지 데이터 에러 : ", error);
            })
    }, [productId]);

    // breadcrumb 전달용 변수
    const breadcrumbItems = [
        { label: "HOME", link: "/" },
        { label: mainCate, link: `/product/list?main_cate=${mainCate}` },
        { label: subCate, link: `/product/list?main_cate=${mainCate}&sub_cate=${subCate}` },
        { label: detailCate, link: `/product/list?main_cate=${mainCate}&sub_cate=${subCate}&detail_cate=${detailCate}` }
    ];

    return (
        <div className="ProductDetail">
            <Breadcrumb items={breadcrumbItems} />
            <div className="inner">
                <div className="left">
                    <ImgSection
                        productThumbs={product.thumbnail}
                    />
                    <InfoSection product={product} otherVariants={otherVariants} />
                    <div style={{ height: '2000px', backgroundColor: '#ffaadd' }}>상세페이지 내용</div>
                </div>
                <div className="right">
                    <InfoSection product={product} otherVariants={otherVariants} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail