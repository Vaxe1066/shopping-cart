import cart from '../shopping-cart.svg';
import {NavLink} from 'react-router-dom';
import React from 'react';

const Navbar = (props) => {

    return (
        <div className={"header"}>
            <div className="shop-name">
                <NavLink className="shop-name-link" to="/" exact><h1>Salvidged Apparel</h1></NavLink>
            </div>
            <div className="navbar"> 
                <ul>
                    <li className="home-item"> <NavLink className="nav-link" to="/" exact activeStyle={{fontWeight: "bold",color: "#6BDEED"}}>Home</NavLink> </li>
                    <li className="products-item"> <NavLink className="nav-link" to="/products" exact activeStyle={{fontWeight: "bold",color: "#6BDEED"}}>Products</NavLink> </li>
                    <li className="contact-item"> <NavLink className="nav-link" to="/contact" exact activeStyle={{fontWeight: "bold",color: "#6BDEED"}}>Contact</NavLink> </li>
                    <li className="cart-item" onClick={() => props.cartClick()}> 

                            <div className="item-count">{props.itemsCount}</div>
                            <div className="cartDiv"> <input className="cart-btn" type="image" alt="Shopping Cart" src={cart} /> </div>
                    </li>
                </ul>
            </div>

        </div>
        )

}

export default Navbar;