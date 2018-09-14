import React, { Component } from 'react';
import logo from '../images/logo.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt="ema-John logo"/>
                <nav className="menu">
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/orders">Order</a>
                </nav>
            </div>
        );
    }
}

export default Header;