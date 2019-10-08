import React from 'react'
import {Route} from 'react-router-dom'
import ProductsList from './Products/ProductsList'
import CartPage from './CartPage/CartPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ShippingPage from './ShippingPage/ShippingPage'

const Main = ({
    addProductToCart
}) => {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                     Filter
                    </div>
                    <div className="col-lg-9">
                   {/*<ProductsList
                         addProductToCart={addProductToCart}
                   />*/}
                   <Route path="/" exact component={ProductsList}/>
                    <Route path="/cart" component={CartPage}/>
                    <Route path="/payment" component={PaymentPage}/>
                    <Route path="/shipping" component={ShippingPage} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main