import React from 'react'

import './CartProductListItemExtended.css'
import QuantityInput from '../../App/Header/Cart/QuantityInput/QuantityInput';

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,

}) => {
    return (
        <div className="cart-product-list-item-description">
            <div className="row">
                <div className="col-lg-3">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="col-lg-9">
                    <p className="cart-extended-name">
                        <span> {product.name} </span>
                    </p>
                    <p className="cart-extended-price">
                        Price for one item: <span className="bold">$ {product.price} </span>
                    </p>
                    <p className="cart-extended-count">
                        Selected quantity: <span className="bold"> {productCount} </span>

                    </p>
                    <p className="cart-extended-sum">
                        Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span>
                    </p>
                    <QuantityInput
                        productCount={productCount}
                        onIncrementClick={() => changeProductQuantity(product.id, productCount+1)}
                        onDecrementClick={
                            productCount === 1  ? () => removeProductFromCart(product.id) 
                                                : () => changeProductQuantity(product.id, productCount-1)
                        }
                        minCount={0}
                        />
                    <button onClick={() => removeProductFromCart(product.id)}>Delete product</button>
                </div>
            </div>
        </div>
    )
}
export default CartProductListItemExtended