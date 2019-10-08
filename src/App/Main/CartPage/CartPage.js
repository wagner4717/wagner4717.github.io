import React from 'react'
import { keys } from 'lodash'
import productsData from '../../Main/Products/productsData'

const productsMap = productsData.reduce((accObj, product) => ({
    ...accObj,
    [product.id]: product
}), {})

const CartPage = ({
    productsInCart
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
            
            <div>Total: {
                keys(productsInCart).reduce((total, productId) => (
                    total + (productsMap[productId].price * productsInCart[productId])
                ), 0)
            }</div>
        </div>
    )
}
export default CartPage