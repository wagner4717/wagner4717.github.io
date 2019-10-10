import React from 'react'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
import productsData, { getProductsMap } from '../../Main/Products/productsData'
import CartTotal from '../../../Components/Cart/CartTotal'

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
            <CartTotal
                productsInCart={productsInCart}
            />
                <Link to="/cart">Show cart</Link>

            </div>
           
        )
    }


export default Cart