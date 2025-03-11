import { useEffect, useState } from "react";
import axios from "axios";
import { ItemCard } from "../card";

const SearchBestItem = () => {
    const [bestItems, setBestItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/data/products.json');
                const products = response.data.products;
                const itemLists = products.flatMap(product =>
                    product.variants.map(variant => ({
                        model_id: product.model.model_id,
                        cate_no: product.model.cate_no,
                        name: product.model.name,
                        price: product.model.price,
                        id: variant.id,
                        serial: variant.serial,
                        color: variant.color,
                        thumbnail: variant.thumbnail[0],
                        stock: variant.stock,
                        discount: variant.discount,
                        sales_count: variant.sales_count,
                        created_at: variant.created_at,
                        totalSales: product.model.price * (100 - variant.discount) / 100 * variant.sales_count
                    }))
                );
                const sortedItems = itemLists.sort((a, b) => b.totalSales - a.totalSales);
                setBestItems(sortedItems.slice(0, 4));
            } catch (error) {
                console.error('베스트아이템 데이터 로딩 실패 : ', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="SearchBestItem">
            <h3>베스트 상품</h3>
            <ul>
                {bestItems.map(item =>
                    <ItemCard key={item.id} product={item} />
                )}
            </ul>
        </div>
    )
};

export default SearchBestItem;