import React from 'react'

import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'


const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <div>
            <h1 className="page-title">Cart Page</h1>
            <div>Name of Product:
                <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
            />
            </div>
            <CartTotal
                productsInCart={productsInCart}
            />
        </div>
    )
}
export default CartPage