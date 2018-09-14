import React, { Component } from 'react';
import fakeData from './../fakeData/index';
import Product from './../Product/Product';
import './Shop.css';
import Cart from './../Cart/Cart';
import {addToDatabaseCart} from '../utility/local-storage';

class Shop extends Component {
    constructor() {
        super();
        
        this.state = {
            products: [],
            cart: []
        }
    }
    
    componentDidMount() {
        const first10 = fakeData.slice(0, 10);
        this.setState({products: first10});
    }

    handleAddToCart = (product) => {
        const newCart = [...this.state.cart, product];
        console.log(newCart);
        this.setState({cart: newCart});
        const quantity = newCart.filter(elem => elem.id === product.id).length;
        addToDatabaseCart(product.id, quantity);
    }
    
    render() {
        return (
            <div className="shop">
                <div className="product-container">
                {
                    this.state.products.map(list => <Product product={list} addToCart={this.handleAddToCart} key={list.id}></Product>)
                }
                </div>
                <div className="cart-container">
                    <Cart cart={this.state.cart}></Cart>
                </div>
            </div>
        );
    }
}

export default Shop;