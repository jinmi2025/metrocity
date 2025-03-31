import { Routes, Route } from "react-router-dom";
import { ProductList } from '../pages/product';

const ProdutRoutes = () => {
    return (
        <Routes>
            <Route path="list" element={<ProductList />} />
        </Routes>
    )
}

export default ProdutRoutes;