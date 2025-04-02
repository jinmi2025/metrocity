import { Routes, Route } from "react-router-dom";
import { ProductList, ProductDetail } from '../pages/product';

const ProdutRoutes = () => {
    return (
        <Routes>
            <Route path="list" element={<ProductList />} />
            <Route path="detail" element={<ProductDetail />} />
        </Routes>
    )
}

export default ProdutRoutes;