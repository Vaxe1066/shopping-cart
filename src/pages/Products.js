import React from "react";
import buckethat1 from '../buckethat1.jpg';
import search from '../search.svg';

const Products = (props) => {
    console.log(buckethat1);

    
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
                side bar
            </div>
            <div className="main-items">
                <div className="search-bar">
                    {searchVar}
                </div>
                <div className="item-cards">
                    <div className="card">
                        <div className="item-image">
                            <img src={buckethat1} alt="first product"/>
                        </div>
                        <div className="item-desc">
                            <p>Fetsival Essential bucket hat 2019</p>
                        </div>
                        <div className="item-cost">
                            <p>£19.99</p>
                        </div>
                        <div className="add-to-cart">
                            <input className="add-cart-btn" type="button" value="Add to cart"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Products;