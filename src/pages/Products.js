import React from "react";
import search from '../search.svg';
import {useState, useEffect} from 'react';
import Cards from "../components/Cards.js";
import Sidebar from "../components/Sidebar.js";


const Products = (props) => {


 

    let searchVar;
    if(props.searchActive){
        searchVar = <input className="search-input" type="search" placeholder="Search Category"/>
    }
    else if(!props.searchActive){
        searchVar=<input type="image" src={search} alt="Search Categories" onClick={() => props.onSearchClick()}/>
    }


    return (

        <div className="products">
            <div className="side-bar">
                <Sidebar categories={props.categories} />
            </div>
            <div className="main-items">
                <div className="search-bar">
                    {searchVar}
                </div>
                <div className="item-cards1">
                    <Cards items={props.items} addToCart = {(e) => props.addToCart(e)}/>
                </div>
            </div>
        </div>
        )
}

export default Products;