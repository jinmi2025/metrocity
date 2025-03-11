const PriceDisplay = ({ price, discount }) => {
    return (
        <>
            {discount}%<br />
            {price * (100 - discount) / 100}원<br />
            {price}원
        </>
    )
}

export default PriceDisplay;