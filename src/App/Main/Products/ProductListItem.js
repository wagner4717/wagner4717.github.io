import React, {Component} from 'react'
import PropTypes from 'prop-types';
import "./ProductListItem.css"


class ProductListItem extends Component {
    render() {
        const {
            name,
            image,
            description,
            capacity,
            price,
            type,
        } = this.props

        return (
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt={description} />
                </div>
                <div className="product-title">{name}</div>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}G</div>
                <div className="product-price">Price: {price}$</div>
                <div className="quantity-input">
                    <button>-</button>
                    <input type="text" value="1" />
                    <button>+</button>
                </div>
                <button className="btn btn-add-to-cart"> Add to cart</button>
            </div>
        )
    }
}


ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

ProductListItem.defaultProps = {
    image: "./images/ipod.png"
}

export default ProductListItem