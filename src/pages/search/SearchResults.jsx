import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { ItemCard } from "../../components/card";
import { SearchForm } from "../../components/search";
import './SearchResults.css';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');

    // 데이터의 모든 상품 배열
    const [products, setProducts] = useState([]);
    // 검색어의 상품 배열
    const [filteredProuducts, setFilteredProducts] = useState([]);
    // 정렬 상태
    // 최신 순 : newest, 인기 순: popular, 저가 순: lowPrice, 고가 순: highPrice
    const [sortOption, setSortOption] = useState('newest');

    // json의 모든 정보를 평탄화. 색상별 개별아이템으로 인식하도록 만들기
    // 백엔드 연결이 없어서 이렇게 만드는것. 
    // 백엔드 연결시 필요없는 과정.
    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get('/data/products.json');
                const productsData = response.data.products;
                const flattenedProducts = productsData.flatMap(product =>
                    product.variants.map(variant => (
                        {
                            ...product.model,
                            ...variant
                        }
                    ))
                );
                setProducts(flattenedProducts);
            };

            fetchData();
        } catch (errror) {
            console.error('제품 데이터 로딩 실패 : ', errror);
        }
    }, []);

    // 검색어가 변경될때 또는 상품데이터가 달라질 때마다 새롭게 호출
    // 백엔드 연결 시 필요없는 과정.
    useEffect(() => {
        if (keyword == '') {
            setFilteredProducts([]);
        } else {
            const filterd = products.filter(product =>
                product.name.includes(keyword) || product.serial.includes(keyword)
            );
            setFilteredProducts(filterd);
        }
    }, [keyword, products]);

    // 정렬 옵션 버튼 클릭 시 호출 할 함수  
    // 배열.sort() => 배열요소를 정렬하는 메서드. 자바스크립트가 이해하는대로 정렬
    // 배열.sort(콜백함수) => 콜백함수로 내가 원하는 정렬 규칙을 전달
    // 콜백함수의 매개변수로 비교하는 두 개의 요소 a와 b를 설정함. 
    // 함수 명령에서 
    // a - b의 결과가 0이면 : a와 b가 같다라는 표시라서 정렬 변경 필요없음.
    // a - b의 결과가 양수라면 : a가 더 큰 수. a를 b보다 뒤로 배치
    // a - b의 결과가 음수라면 : b가 더 큰 수. a를 b보다 앞으로 배치
    // => 오름차순 정렬
    const sortedProducts = filteredProuducts.sort((a, b) => {
        // 개별 판매금액 = 가격 * (100 - 할인) / 100
        const aPrice = a.price * (100 - a.discount) / 100;
        const bPrice = b.price * (100 - b.discount) / 100;
        // 전체 판매금액 = 개별 판매금액 * 판매수량 
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

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    return (
        <div className="SearchResults">
            <h2>검색 결과</h2>
            <div className="top">
                <div className="topLeft">총 {filteredProuducts.length}개</div>
                <div className="topRight">
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
                    <SearchForm keyword={keyword} />
                </div>
            </div>
            {filteredProuducts.length == 0
                ? <div className="noResults">검색 결과가 없습니다.</div>
                : <div className="hasResults">
                    <ul>
                        {sortedProducts.map(product =>
                            <ItemCard key={product.id} product={product} />
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}

export default SearchResults;