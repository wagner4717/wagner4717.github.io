import React from 'react'

import "./ProductListItem.css"

const ProductListItem =({
    name,
    description,
    type,
    capacity,
    price,
}) => {
    return (
        <div className="product-list-item"> 
           <div className="product-title">{name}</div>
           <p className="product-description">{description}</p>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity}</div>
            <div className="product-price">Price: {price}</div>
            <button className="btn btn-add-to-cart"> Add to cart</button>
        </div>
    )
}
export default ProductListItem