import React from "react";
import search from '../search.svg';
import {useState, useEffect} from 'react';
import Cards from "../components/Cards.js";
import Sidebar from "../components/Sidebar.js";
import CartDisplay from "../components/CartDisplay.js";


const Products = (props) => {


 

    let searchVar;
    if(props.searchActive){
        searchVar = <form onSubmit={(e)=>props.onSearchSubmit(e) }>
                        <input className="search-input" type="search" placeholder="Search Category" value={props.searchState || ''}
                            onChange={(e) => props.onSearchChange(e)}/>
                        <button className="search-sbmit" type="submit"/>
                    </form>

    }
    else if(!props.searchActive){
        searchVar=<input className="search-icon" type="image" src={search} alt="Search Categories" onClick={() => props.onSearchClick()}/>
    }


    return (

        <div className="products">
            <div className="side-bar">
                <Sidebar categories={props.categories} categoryClick={(e) => props.categoryClick(e)}/>
            </div>
            <div className="main-items">
                <div className="search-bar">
                    <h3>{props.categoryHeader}</h3>
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