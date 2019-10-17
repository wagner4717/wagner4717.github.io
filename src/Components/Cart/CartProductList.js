import React from 'react'
import { keys } from 'lodash'
import productsData, { getProductsMap } from '../../App/Main/Products/productsData'
import CartProductListItem from './CartProductListItem';


const CartProductList = ({
    productsInCart,
    productsMap = getProductsMap(productsData),
    CartItem=CartProductListItem
}) => {
    return (
        <div>
            {
                keys(productsInCart).map((productId) => {
                    return (
                        <CartItem
                            product={productsMap[productId]}
                            productCount={productsInCart[productId]}
                        />
                    )
                })
            }
        </div>
    )
}

export default CartProductList