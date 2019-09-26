import React, {Component} from 'react'

import './../common/style/reset.css'
import './../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
	state = {
		productsInCart:{
			"1":5,
			"2":10,
		}
	}

	productsInCart

	addProductToCart = (productId,count) => {
		this.setState((prevState) => ({
			productsInCart: {
				[productId]: prevState.productsInCart[productId] + count,
			}
		})
		)
	}


	render(){
		return(
			<div>
				<Header 
					productsInCart = {this.state.productsInCart}
					/>
				<button onClick={()=>this.addProductToCart(1,10)}>Add to cart</button>
				<Main
				addProductToCart = {this.addProductToCart}
				cartData = {this.cartData}
				/>
				<Footer />
			</div>
		)
	}
}


export default App