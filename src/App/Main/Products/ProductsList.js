import React from 'react'
import './ProductsList.css'
import productsData from './productsData'

import ProductListItem from './ProductListItem';

const ProductsList = () => {
    return (
        <div>
            <h1 className="page-title">Products List</h1>
            <div className="row">
                {
                    productsData.map((product) => (
                        <div className= "col-lg-6" key={product.id}>
                        <ProductListItem
                            name={product.name}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList