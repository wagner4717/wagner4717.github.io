import React from 'react'
import {keys} from 'lodash'
import productsData from '../../Main/Products/productsData'

import './cart.css'

const productsMap = productsData.reduce((accObj,product)=>({
    ...accObj,
    [product.id]:product
}),{})



const Cart = ({
    productsInCart,
}) => {
        return (
            <div className="cart text-center">
                {
                    keys(productsInCart).map((productId) => {
                        return (
                            <div key={productId}>{productsMap[productId].name}: {productsInCart[productId]}</div>
                        )
                })
            }

                <div>
                    Total: 
                         {
                          keys(productsInCart).reduce((total,productId) => (
                              total + (productsMap[productId].price * productsInCart[productId])
                          ),0 )
                        }
                  
                          $
                </div>

            </div>
           
        )
    }


export default Cart