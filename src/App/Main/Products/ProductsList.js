import React from 'react'
import './ProductsList.css'
import ProductListItem from './ProductListItem';

const ProductsList = () => {
    return (
        <div>
            <h1 className="page-title">Products List</h1>
            <div className="row">
                <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone X"
                        description = "This is iPhone X"
                        type="phone"
                        capacity="128"
                        price="1500"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem 
                        name="iPhone XS"
                        description="This is iPhone XS"
                        type="phone"
                        capacity="200"
                        price="1900"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem 
                        name="iPhone XS Max"
                        description="This is iPhone XS Max"
                        type="phone"
                        capacity="189"
                        price="1700"
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem 
                        name="iPhone 8"
                        description="This is iPhone 8"
                        type="phone"
                        capacity="894"
                        price="500"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductsList