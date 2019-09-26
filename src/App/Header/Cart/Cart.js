import React from 'react'

import './cart.css'

const Cart = ({
    productsInCart,
}) => {
        return (
            <div className="cart text-center">
                <div className="products-count">{productsInCart['1']}</div>
            </div>
        )
    }


export default Cart