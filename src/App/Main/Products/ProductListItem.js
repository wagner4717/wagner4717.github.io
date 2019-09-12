import React from 'react'
import PropTypes from 'prop-types';
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


ProductListItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    capacity: PropTypes.number,
    price: PropTypes.number,
}



export default ProductListItem