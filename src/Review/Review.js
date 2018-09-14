import React, { Component } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utility/local-storage';
import fakeData from './../fakeData/index';
import Cart from './../Cart/Cart';
import Product from './../Product/Product';
import giphy from '../images/giphy.gif';

class Review extends Component {
    constructor(){
        super();

        this.state = {
            cart: [],
            orderPlaced: false
        };
    }

    componentDidMount() {
        const storedCart = getDatabaseCart();
        const savedCart = [];
        for (let id in storedCart) {
            const product = fakeData.find(product => product.id === id);
            product.quantity = storedCart[id];
            savedCart.push(product);
        }
        console.log(savedCart);
        this.setState({cart: savedCart});
    }

    handleRemoveItem = (product) => {
        const newCart = this.state.cart.filter(elem => elem.id !== product.id);
        this.setState({cart: newCart});
        removeFromDatabaseCart(product.id);
    };

    placeOrder = () => {
        this.setState({orderPlaced: true, cart: []});
        processOrder(); //use external utility method to clear cart cache in local storage
    }

    render() {
        let img;

        if (this.state.orderPlaced) {
            img = <img src={giphy} alt="Congrats on completing your order"></img>
        }

        return (
            <div className="shop">
                <div className="product-container">
                {
                    this.state.cart.map(elem => <Product product={elem} key={elem.id} handleRemoveItem={this.handleRemoveItem} isReview />)
                }
                {img}
                </div>
                <div className="cart-container">
                    <Cart cart={this.state.cart}>
                        <button onClick={this.placeOrder}>Place Order</button>
                    </Cart>
                </div>
            </div>
        );
    }
}

export default Review;