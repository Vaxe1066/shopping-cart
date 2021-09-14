import React from 'react';


const CartDisplay = (props) =>{



    return(
        <div className="cart-div">
            <span id='close' onClick={() => props.close()}>x</span>
            <div className="item-cards-cart">
                {props.items.map((item)=>{
                    return(
                        <div id = {item.id} key={item.id} className="card">
                            <div className="item-image">
                                <img src={item.image} alt="first product"/>
                            </div>
                            <div  className="bottom-text">
                                <p>{item.desc} <br/>
                                    £{item.price} <br/>
                                    <span id={item.id} className="minus" onClick={(e) => props.remove(e)}> - 
                                    </span> {item.count} 
                                    <span id={item.id} className="plus" onClick={(e) => props.add(e)}> + </span>
                                </p>
                                {/*<input id={item.id} className="add-cart-btn" type="button" value="Add to cart" onClick={(e) => props.addToCart(e)}/>*/}
                            </div>
                        </div>
                    )
                })
                }
                
            </div>
            <div className="total"> 
                <p>Total £{props.total}</p>
            </div>
        </div>

        )
}


export default CartDisplay