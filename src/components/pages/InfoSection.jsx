import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PriceDisplay, PriceNumber } from '../card';
import './InfoSection.css';

const InfoSection = ({ product, otherVariants }) => {
    const salePrice = product.price * (100 - product.discount) / 100;
    const reward = Math.floor(salePrice * 0.02);
    // 올림 ceil, 내림 floor, 반올림 round

    // 사이즈 옵션 값
    const [selectOption, setSelectOption] = useState('');
    // 수량
    const [quantity, setQuantity] = useState(0);

    const handleOptChange = (e) => {
        setSelectOption(e.target.value);
        setQuantity(1);
    }

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const totalPrice = salePrice * quantity;
    const totalReward = Math.floor(totalPrice * 0.02);

    return (
        <div className="InfoSection">
            <div className='name-info'>
                {product.name} {product.serial}
            </div>
            <div className='price-info'>
                {product.price && <PriceDisplay price={product.price} discount={product.discount} que='won' />}
            </div>
            <div className='reward-info'>
                <div>
                    <p className='label'>적립금</p>
                    <p className='value'>2%({product.price && <PriceNumber price={reward} que='p' />})</p>
                </div>
                <div>
                    <p className='label'>최적할인가</p>
                    <p className='value'>{product.price && <PriceNumber price={salePrice} que='won' />}</p>
                </div>
            </div>
            {otherVariants.length > 0 &&
                <div className='color-info'>
                    <p className='label'>COLOR</p>
                    <ul>
                        {otherVariants.map(variant =>
                            <li key={variant.id}>
                                <Link to={`/product/detail?main_cate=${variant.main_category}&sub_cate=${variant.sub_category}&detail_cate=${variant.detail_category}&product_id=${variant.id}`}>
                                    <img src={variant.thumbnail[0]} />
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            }
            <div className='size-info'>
                <p className='label'>사이즈</p>
                <div className='size-select'>
                    <select value={selectOption} onChange={handleOptChange} required>
                        <option value=''>- [필수] 옵션을 선택해 주세요 -</option>
                        <option value='' disabled>----------------------------------</option>
                        <optgroup label='사이즈'>
                            <option value='free'>FREE</option>
                        </optgroup>
                    </select>
                </div>
                {selectOption === "free" && (
                    <div className="selected-size">
                        <p>
                            <strong>제품명:</strong> {product.name}
                        </p>
                        <p>
                            <strong>선택 사이즈:</strong> {selectOption}
                        </p>
                        <div className="quantity-selector">
                            <button onClick={handleDecrease}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrease}>+</button>
                        </div>
                        <p>
                            <strong>가격:</strong> {totalPrice.toLocaleString()}원
                        </p>
                        <p>
                            <strong>적립금:</strong> {totalReward.toLocaleString()}원
                        </p>
                    </div>
                )}
                <div className="totalPriceDisplay">
                    <p>TOTAL (QUANTITY)</p>
                    <p>
                        <PriceNumber price={totalPrice} que="won" />
                        (적, <PriceNumber price={totalReward} que="p" />)
                    </p>
                </div>
                <div className="submit">
                    <button className="add-to-cart">장바구니</button>
                    <button className="buy-now">즉시구매</button>
                </div>
            </div>
        </div>
    )
};

export default InfoSection;