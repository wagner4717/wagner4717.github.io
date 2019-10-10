import React from 'react'
import { keys } from 'lodash'
import productsData, { getProductsMap } from '../../Main/Products/productsData'
import CartTotal from '../../../Components/Cart/CartTotal'


const CartPage = ({
    productsInCart,
    productsMap=getProductsMap(productsData)
}) => {
    return (
        <div>
            <h1 className="page-title">Cart Page</h1>
            <div>Name of Product:{
                keys(productsInCart).map((productId) => {
                    return (
                        <div key={productId}>{productsMap[productId].name}: {productsInCart[productId]}: price for one product = {productsMap[productId].price} </div>
                    )
                })
            }
            </div>
            <CartTotal
                productsInCart={productsInCart}
            />
        </div>
    )
}
export default CartPage