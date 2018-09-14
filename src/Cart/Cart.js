import React, { Component } from 'react';

class Cart extends Component {
    render() {
        const cart = this.props.cart;
        const totalPrice = cart.reduce((total, product) => total+product.price, 0).toFixed(2);

        return (
            <div>
                <h4>Order Summary</h4>
                <p>Items Ordered: {cart.length}</p>
                <p>Total: ${totalPrice}</p>
                <br />
                {this.props.children}
            </div>
        );
    }
}

export default Cart;