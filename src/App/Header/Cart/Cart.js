import React from 'react'
import {keys} from 'lodash'
import productsData from '../../Main/Products/productsData'

import './cart.css'

/*const productsMap = productsData.reduce((accObj,product)=>({
    ...accObj,
    [product.Id]:product
}),{})*/



const Cart = ({
    productsInCart,
}) => {
        return (
            <div className="cart text-center">
                {
                    keys(productsInCart).map((productId) => {
                        return (
                            <div key={productId}>{productsData[productId-1].name}: {productsInCart[productId]}</div>
                        )
                })
            }

            </div>
        )
    }


export default Cart