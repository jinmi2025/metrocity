const PriceNumber = ({ price, que = '' }) => {
    const formatPrice = (value) => {
        const formatted = value.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' });
        return {
            symbol: formatted.substring(0, 1),
            number: formatted.substring(1)
        }
    };

    const displayPrice = formatPrice(price);

    return (
        <>
            <span className="symbol">{que == 'frt' && displayPrice.symbol}</span>
            <span className="number">{displayPrice.number}</span>
            <span className="symbol">{que == 'won' && '원'}</span>
            <span className="symbol">{que == 'p' && 'P'}</span>
        </>
    )
};

export default PriceNumber;