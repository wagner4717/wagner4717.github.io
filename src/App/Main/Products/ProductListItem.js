import React, {Component} from 'react'
import PropTypes from 'prop-types';
import "./ProductListItem.css"


class ProductListItem extends Component {
    render() {
        return (
            <div className="product-list-item">
                <div className="product-image">
                    <img src={this.image} alt={this.description} />
                </div>
                <div className="product-title">{this.name}</div>
                <p className="product-description">{this.description}</p>
                <div className="product-features">Type: {this.type}</div>
                <div className="product-features">Capacity: {this.capacity}G</div>
                <div className="product-price">Price: {this.price}$</div>
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