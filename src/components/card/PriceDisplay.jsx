import { PriceNumber } from './index';
import './PriceDisplay.css';

const PriceDisplay = ({ price, discount, que = 'frt' }) => {
    const hasDiscount = discount > 0;
    const salePrice = hasDiscount ? price * (100 - discount) / 100 : price;

    return (
        <div className='price-display'>
            {hasDiscount && <p className='discount'>{discount}%</p>}
            <p className='sale-price'><PriceNumber price={salePrice} que={que} /></p>
            <p className='origin-price'>{hasDiscount && <PriceNumber price={price} que={que} />}</p>
        </div>
    )
}

export default PriceDisplay;