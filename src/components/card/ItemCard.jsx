import PriceDisplay from './PriceDisplay';
import './ItemCard.css';

const ItemCard = ({ product }) => {
    return (
        <li className='item-card'>
            <p className="product-img"><img src={product.thumbnail} /></p>
            <p className="product-name">
                {product.name} {product.serial}
            </p>
            <div className="product-price">
                <PriceDisplay price={product.price} discount={product.discount} />
            </div>
        </li>
    )
}

export default ItemCard;