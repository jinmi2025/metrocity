import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// useSearchParams는 url의 쿼리스트링을 읽고 수정할 수 있는 기능을 제공하는 훅
import axios from "axios";
import { Breadcrumb } from "../../components/pages";
import { ItemCard } from "../../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './ProductList.css';

const ProductList = () => {
    const [searchParams] = useSearchParams();
    const mainCate = searchParams.get('main_cate'); // url 쿼리 main_cate의 값을 저장
    const subCate = searchParams.get('sub_cate');
    const detailCate = searchParams.get('detail_cate');

    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('newest'); // 정렬옵션. 기본값은 최신순
    const [currentPage, setCurrentPage] = useState(1); // 페이져 값 

    useEffect(() => {
        axios.get('/data/products.json')
            .then(response => {
                return response.data.products;
            })
            .then(data => {
                const filteredProducts = data.flatMap(product => {
                    const { main_category, sub_category, detail_category } = product.model;
                    if (
                        (!mainCate || main_category == mainCate) &&
                        (!subCate || sub_category == subCate) &&
                        (!detailCate || detail_category == detailCate)
                    ) {
                        return product.variants.map(variant => ({
                            ...product.model,
                            ...variant
                        }))
                    }
                    return [];
                });
                setProducts(filteredProducts);
            })
            .catch(err => console.error('상품리스트 오류 : ', err))
    }, [mainCate, subCate, detailCate]);

    const pageTitle = detailCate || subCate || mainCate || '제품 목록';

    const breadcrumbItems = [
        { label: 'HOME', link: '/' },
        { label: mainCate, link: `/product/list?main_cate=${mainCate}` },
        { label: subCate, link: `/product/list?main_cate=${mainCate}&sub_cate=${subCate}` },
        { label: detailCate, link: `/product/list?main_cate=${mainCate}&sub_cate=${subCate}&detail_cate=${detailCate}` }
    ];



    const sortedProducts = products.sort((a, b) => {
        const aPrice = a.price * (100 - a.discount) / 100;
        const bPrice = b.price * (100 - b.discount) / 100;
        const aTotalSales = aPrice * a.sales_count;
        const bTotalSales = bPrice * b.sales_count;
        switch (sortOption) {
            case 'newest':
                return new Date(b.created_at) - new Date(a.created_at);
            case 'popular':
                return bTotalSales - aTotalSales;
            case 'lowPrice':
                return aPrice - bPrice;
            case 'highPrice':
                return bPrice - aPrice;
            default:
                return 0;
        }
    });

    const totalItems = products.length;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalItems / itemsPerPage); // 올림처리해서 정수 반환
    const idxOfLastItem = currentPage * itemsPerPage;
    const idxOfFirstItem = idxOfLastItem - itemsPerPage;
    const currentProducts = sortedProducts.slice(idxOfFirstItem, idxOfLastItem);

    const handlePageChange = (pageNumber) => {
        if (pageNumber <= 0) pageNumber = 1;
        if (pageNumber >= totalPages) pageNumber = totalPages;
        setCurrentPage(pageNumber);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
        setCurrentPage(1); // 정렬이 바뀌면 1페이지부터 다시 출력
    };

    return (
        <div className="product-list">
            <div className="product-list-inner">
                <h2>{pageTitle}</h2>
                <div className="page-top">
                    <Breadcrumb items={breadcrumbItems} />
                    <div className="right">
                        <div className="item-count">전체 {totalItems}개</div>
                        <div className="sort-btn">
                            <p className={sortOption == 'newest' ? 'active' : ''}>
                                <button onClick={() => { handleSortChange('newest') }}>최신순</button>
                            </p>
                            <p className={sortOption == 'popular' ? 'active' : ''}>
                                <button onClick={() => { handleSortChange('popular') }}>인기순</button>
                            </p>
                            <p className={sortOption == 'lowPrice' ? 'active' : ''}>
                                <button onClick={() => { handleSortChange('lowPrice') }}>낮은 가격순</button>
                            </p>
                            <p className={sortOption == 'highPrice' ? 'active' : ''}>
                                <button onClick={() => { handleSortChange('highPrice') }}>높은 가격순</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product-list-box">
                    <ul>
                        {currentProducts.map(product =>
                            <ItemCard key={product.id} product={product} />
                        )}
                    </ul>
                </div>
                <div className="pager">
                    <p className="prev">
                        <button onClick={() => { handlePageChange(currentPage - 1) }}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                    </p>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                        (page, idx) =>
                            <p key={idx} className={`paging ${page == currentPage ? 'active' : ''}`}>
                                <button onClick={() => { handlePageChange(page) }}>{page}</button>
                            </p>
                    )}
                    <p className="next">
                        <button onClick={() => { handlePageChange(currentPage + 1) }}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default ProductList;