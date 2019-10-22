import React from 'react'

const QuantityInput = ({
    onDecrementClick,
    productCount,
    onIncrementClick
}

) =>{
        return(
            <div className="quantity-input">
                <button
                    onClick={() => onDecrementClick()}
                    disabled={productCount <= 1}
                >-</button>
                <input type="text" value={productCount} readOnly />
                <button
                    onClick={() => onIncrementClick()}
                    disabled={productCount >= 10}
                >+</button>
            </div>
            )
}
export default QuantityInput