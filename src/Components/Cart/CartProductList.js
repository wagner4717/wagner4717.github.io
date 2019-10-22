import React from 'react'
import { keys } from 'lodash'
import productsData, { getProductsMap } from '../../App/Main/Products/productsData'
import CartProductListItem from './CartProductListItem';



const CartProductList = ({
    productsInCart,
    removeProductFromCart,
    productsMap = getProductsMap(productsData),
    CartItem=CartProductListItem,
    incrementClick,
    decrementClick
    
    
}) => {
    return (
        <div>
            {
                keys(productsInCart).map((productId) => {
                    return (
                        <CartItem
                            product={productsMap[productId]}
                            productCount={productsInCart[productId]}
                            key={productId}
                            removeProductFromCart={removeProductFromCart}
                            incrementClick={incrementClick}
                            decrementClick={decrementClick}

                            
                        />
                    )
                })
            }
        </div>
    )
}

export default CartProductList