import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get('product_id');

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get('/data/products.json')
            .then(res => res.data.products)
            .then(products => {
                const foundVariant = products
                    .flatMap(product =>
                        product.variants.map(variant => (
                            {
                                ...product.model,
                                ...variant
                            }
                        ))
                    )
                    .find(item => item.id == productId);
                setProduct(foundVariant);
            })
            .catch(err => console.error('상세페이지 데이터 로딩 오류 : ', err));
    }, [productId]);

    return (
        <div className="ProductDetail">
            <h1>{productId}</h1>
        </div>
    )
}

export default ProductDetail;