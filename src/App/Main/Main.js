import React from 'react'
import ProductsList from './Products/ProductsList'

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
                         cartData = {cartData}
                    />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main