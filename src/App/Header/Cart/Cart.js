import React from 'react'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
import productsData, { getProductsMap } from '../../Main/Products/productsData'


import './cart.css'



const Cart = ({
    productsInCart,
    productsMap=getProductsMap(productsData),
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
                <Link to="/cart">Show cart</Link>

            </div>
           
        )
    }


export default Cart