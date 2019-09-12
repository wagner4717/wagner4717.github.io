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
                    productsData.map(({
                        id,
                        name,
                        type,
                        description,
                        capacity,
                        price,
                        image,
                    }) => (
                        <div className= "col-lg-6" key={id}>
                        <ProductListItem
                            image={image}
                            name={name}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                        />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList