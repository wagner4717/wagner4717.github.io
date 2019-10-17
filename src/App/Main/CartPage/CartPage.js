import React from 'react'

import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'


const CartPage = ({
    productsInCart,
}) => {
    return (
        <div>
            <h1 className="page-title">Cart Page</h1>
            <div>Name of Product:
                <CartProductList
                productsInCart={productsInCart}
            />
            </div>
            <CartTotal
                productsInCart={productsInCart}
            />
        </div>
    )
}
export default CartPage