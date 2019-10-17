import React, {Component} from 'react'

import './../common/style/reset.css'
import './../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
	state = {
		productsInCart:{
			"1":1,
			"2":1,
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
removeProductFromCart = (productId) =>{
	this.setState((prevState) => )
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
				/>
				<Footer />
				<button onClick={() => removeProductFromCart(id, this.state.productCount)}>Delete</button>
			</div>
		)
	}
}


export default App