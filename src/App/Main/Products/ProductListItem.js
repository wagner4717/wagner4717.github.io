import React, {Component} from 'react'
import PropTypes from 'prop-types';
import "./ProductListItem.css"


class ProductListItem extends Component {

    

    state = {
        productCount:1,
        color: "green"
    }
    changeColor () {
        this.setState ({color:"blue"})
    }
    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1
        })
         )
    }
    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1
        })
        )
    }
    render() {
        const {
            name,
            image,
            description = "No desc",
            capacity,
            price,
            type,
            addProductToCart,
            cartData,
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
                <div 
                >Color:{this.state.color}
                </div>
                <button
                onClick={() => this.changeColor()}
                >Change color</button>
                <div className="quantity-input">
                    <button 
                    onClick={()=>this.onDecrementClick()}
                    disabled={this.state.productCount <= 1}
                    >-</button>
                    <input type="text" value={this.state.productCount} readOnly/>
                    <button 
                    onClick={()=>this.onIncrementClick()}
                    disabled={this.state.productCount >= 10}
                    >+</button>
                </div>
                <button className="btn btn-add-to-cart"
                    onClick={() => cartData(name,this.state.productCount)}
                > Add to cart</button>
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