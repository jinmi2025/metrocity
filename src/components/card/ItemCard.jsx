import PriceDisplay from './PriceDisplay';
import { Link } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = ({ product }) => {
    return (
        <li className='item-card'>
            <Link to={`/product/detail?product_id=${product.id}`}>
                <p className="product-img"><img src={product.thumbnail[0]} /></p>
                <p className="product-name">
                    {product.name} {product.serial}
                </p>
                <div className="product-price">
                    <PriceDisplay price={product.price} discount={product.discount} />
                </div>
            </Link>
        </li>
    )
}

export default ItemCard;