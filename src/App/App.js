import React, {Component} from 'react'
import {omit} from 'lodash'

import './../common/style/reset.css'
import './../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
	state = {
		productsInCart:{
		},
		isLike: {
			"1":false, 
			"2":true,
		}
	} 

	addProductToCart = (productId,count) => {
		this.setState((prevState) => ({
			productsInCart: {
				...prevState.productsInCart,
				[productId]: (prevState.productsInCart[productId] || 0) + count,
			}
		})
		)
	}

	removeProductFromCart = (productId) => {
		this.setState((prevState) =>  ({
			productsInCart:omit(prevState.productsInCart,[productId])	
			}))
	}	

	changeProductQuantity = (productId,count) => {
		this.setState((prevState) => ({
			productsInCart:{
				...prevState.productsInCart,
				[productId]:count
			}
		}))
	}

	addLike = (productId) => {
		this.setState((prevState) => ({
			isLike:{
				...prevState.isLike,
				[productId]:true,
			}
		}))
	}
	removeLike = (productId) => {
		this.setState((prevState) => ({
			isLike: {
				...prevState.isLike,
				[productId]:false,
			}
		}))
	}


	render(){
		return(
			<div>
				<Header 
					productsInCart = {this.state.productsInCart}
					/>
				<Main
					addProductToCart = {this.addProductToCart}
					productsInCart={this.state.productsInCart}
					removeProductFromCart={this.removeProductFromCart}
					changeProductQuantity={this.changeProductQuantity}
					addLike={this.addLike}
					removeLike={this.removeLike}
					isLike={this.state.isLike}
				/>
				<Footer />
			</div>
		)
	}
}

export default App