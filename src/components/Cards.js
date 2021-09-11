import React from "react";

const Cards = (props) => {

    return(
        <div className="item-cards">
            {props.items.map((item)=>{
                return(
                    <div key={item.id} className="card">
                        <div className="item-image">
                            <img src={item.image} alt="first product"/>
                        </div>
                        <div  className="bottom-text">
                            <p>{item.desc} <br/>
                                £{item.price}
                            </p>
                            <input id={item.id} className="add-cart-btn" type="button" value="Add to cart" onClick={(e) => props.addToCart(e)}/>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default Cards;