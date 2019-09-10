import React from 'react'

const ProductListItem =() => {
    return (
        <div className="product=list-item"> 
           <div className="product-title">iPhone X</div>
           <p className="product-deccription">This is iPhone X</p>
            <div className="product-features">Type: phone </div>
            <div className="product-features">Capacity: 64 G</div>
            <div className="product-price">Price: 500$</div>
            <button className="btn btn-add-to-cart"> Add to cart</button>
        </div>
    )
}
export default ProductListItem