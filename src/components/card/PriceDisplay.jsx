import { PriceNumber } from './index';
import './PriceDisplay.css';

const PriceDisplay = ({ price, discount }) => {
    const hasDiscount = discount > 0;
    const salePrice = hasDiscount ? price * (100 - discount) / 100 : price;

    return (
        <div className='price-display'>
            {hasDiscount && <p className='discount'>{discount}%</p>}
            <p className='sale-price'><PriceNumber price={salePrice} que='frt' /></p>
            <p className='origin-price'>{hasDiscount && <PriceNumber price={price} que='frt' />}</p>
        </div>
    )
}

export default PriceDisplay;