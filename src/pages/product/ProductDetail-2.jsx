import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Breadcrumb, ImgSection, InfoSection } from '../../components/pages';
import './ProductDetail.css';

const ProductDetail = () => {
    const [searchParams] = useSearchParams();
    const main_cate = searchParams.get('main_cate');
    const sub_cate = searchParams.get('sub_cate');
    const detail_cate = searchParams.get('detail_cate');
    const productId = searchParams.get('product_id');

    // 상품 상세 내역
    const [product, setProduct] = useState(null);
    // 다른 색상 제품
    const [otherVariants, setOtherVariants] = useState(null);

    useEffect(() => {
        axios
            .get('/data/products.json')
            .then(res => res.data.products)
            .then(products => {
                // 전체 자료 평탄화
                const flatVariants = products
                    .flatMap(product =>
                        product.variants.map(variant => (
                            {
                                ...product.model,
                                ...variant
                            }
                        ))
                    )
                // 현재 페이지에 해당하는 자료 저장
                const foundVariant = flatVariants.find(item => item.id == productId);
                setProduct(foundVariant);

                // 다른 색상 자료 저장
                if (foundVariant) {
                    const sameModelVariants = flatVariants.filter(variant =>
                        variant.model_id == foundVariant.model_id &&
                        variant.color != foundVariant.color
                    );
                    setOtherVariants(sameModelVariants);
                }
            })
            .catch(err => console.error('상세페이지 데이터 로딩 오류 : ', err));
    }, [productId]);

    // Breadcrumb의 props로 전달할 값
    // 홈 > 대분류 > 중분류 > 소분류 
    const breadItems = [
        {
            label: 'HOME',
            link: '/'
        },
        {
            label: main_cate,
            link: `/product/list?main_cate=${main_cate}`
        },
        {
            label: sub_cate,
            link: `/product/list?main_cate=${main_cate}&sub_cate=${sub_cate}`
        },
        {
            label: detail_cate,
            link: `/product/list?main_cate=${main_cate}&sub_cate=${sub_cate}&detail_cate=${detail_cate}`
        }
    ];

    return (
        <div className="ProductDetail">
            <Breadcrumb items={breadItems} />
            <div className='inner'>
                <div className='left'>
                    <ImgSection productThumbs={product.thumbnail} />
                    <InfoSection />
                    <div>상세페이지 내용</div>
                </div>
                <div className='right'>
                    <InfoSection
                        product={product}
                        otherVariants={otherVariants}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;