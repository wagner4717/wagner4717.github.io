import React from 'react'
import {Route} from 'react-router-dom'
import ProductsList from './Products/ProductsList'
import CartPage from './CartPage/CartPage'

const Main = ({
    addProductToCart,
    cartData
}) => {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                     Filter
                    </div>
                    <div className="col-lg-9">
                    <ProductsList
                         addProductToCart={addProductToCart}
                    />
                    <Route path="/cart" component={CartPage}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main