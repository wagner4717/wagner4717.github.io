import React from 'react'

import "./ProductListItem.css"
import { tsPropertySignature } from '@babel/types';

const ProductListItem =(props) => {
    return (
        <div className="product-list-item"> 
           <div className="product-title">{props.name}</div>
           <p className="product-description">{props.description}</p>
            <div className="product-features">Type:{props.type}</div>
            <div className="product-features">Capacity:{props.capacity}</div>
            <div className="product-price">Price:{props.price}</div>
            <button className="btn btn-add-to-cart"> Add to cart</button>
        </div>
    )
}
export default ProductListItem