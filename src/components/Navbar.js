import cart from '../shopping-cart.svg';
import {NavLink} from 'react-router-dom';
import React from 'react';

const Navbar = () => {

    return (
        <div className="header">
            <div className="shop-name">
                <h1>Re-Psych-a-d-Ellie</h1>
            </div>
            <div className="navbar"> 
                <ul>
                    <li className="home-item"> <NavLink to="/" exact>Home</NavLink> </li>
                    <li className="products-item"> <NavLink to="/products" exact>Products</NavLink> </li>
                    <li className="contact-item"> <NavLink to="/contact" exact>Contact</NavLink> </li>
                    <li className="cart-item"> <input className="cart-btn" type="image" alt="Shopping Cart" src={cart} /> </li>
                </ul>
            </div>

        </div>
        )

}

export default Navbar;