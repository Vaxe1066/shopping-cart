import './App.css';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Contact from './pages/Contact.js';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import uniqid from "uniqid";

/*import images for products */
import buckethat1 from './buckethat1.jpg';
import buckethat2 from './buckethat2.jpg';
import CartDisplay from './components/CartDisplay';

const App = () =>{
  const [searchActive, setSearchActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [cart, settCart] = useState([]);
  const [currentSelCart, setCurrentSelCart] = useState({});
  const [total, setTotal] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [cardArray, setCardArray] = useState(
        [
          {
            image:buckethat1,
            desc:'Festival Essential bucket hat 2019',
            price:'19.99',
            id: uniqid(),
            category: "Bucket Hats",
            count: 0
          },
          {
            image: buckethat2,
            desc:'Ellie Special',
            price:'14.99',
            id: uniqid(),
            category: "Bucket Hats",
            count:0
          }
        ]
      );

  const [categories, setCategories] = useState([
    { 
      category: "Bucket Hats",
      id: uniqid(),
    },
    { 
      category: "T-Shirts",
      id: uniqid(),
    },
    { 
      category: "Bottoms",
      id: uniqid(),
    },
    { 
      category: "Shirts",
      id: uniqid(),
    },
    { 
      category: "Shorts",
      id: uniqid(),
    },
    { 
      category: "Face Masks",
      id: uniqid(),
    },
    
  ])




  const escDown = (event) =>{
    if(event.keyCode===27){
      setSearchActive(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escDown, false);
    totalPrice();
    countItems();
  }, [cart])

  const searchClick = () => { 
    setSearchActive(true);
  }

  const containsObject = (obj, list) =>{
    for(let i=0; i<list.length; ++i){
      if(list[i] === obj){
        return true;
      }
    }
    return false;
  }
  const addToCart = (event) => {
  
    let id = event.target.id;
    for(let i=0; i<cardArray.length; ++i){
      if((cardArray[i].id===id) ){
        if(!containsObject(cardArray[i], cart)){
          let obj = cardArray[i];
          obj.count = obj.count + 1;
          let copyCardArray = [...cardArray];
          copyCardArray[i] = obj
          settCart([...cart, cardArray[i]]);
          break;
        }
        else if( containsObject(cardArray[i], cart) ){
          let obj = cardArray[i];
          obj.count = obj.count + 1;
          let copyCardArray = [...cart];
          copyCardArray[i] = obj
          settCart([...copyCardArray]);
        }
      }
      else{
        continue;
      }
    }
  }


  const checkCartDupes = () => {
    let lstId = [];
    for(let i=0; i<=cart.length; ++i){
      if (!lstId.includes(cart[i].id) ){
        lstId.push(cart[i].id)
      }
    }
    return lstId;
  }

  const displayCart = () => {
    setCartActive(true);
  }


  const closeBtn = () =>{
    setCartActive(false);
  }

  const removeItem = (e) => {
    let id = e.target.id;
    for(let i=0; i<=cart.length; ++i){
      let obj = cart[i];
      if( (cart[i].id===id) ){
        if(obj.count>0){
          obj.count = obj.count -1;
          let copyCartrray = [...cart];
          copyCartrray[i] = obj
          settCart([...copyCartrray]);
          break;
        }
        else{
         break; 
        }


      }
    }
}

const addItem = (e) => {
  let id = e.target.id;
  for(let i=0; i<=cart.length; ++i){
    let obj = cart[i];
    if( (cart[i].id===id) ){
      obj.count = obj.count + 1;
      let copyCartrray = [...cart];
      copyCartrray[i] = obj
      settCart([...copyCartrray]);
      break;
    }
  }
}


const totalPrice = () => {
  let totalPrice=0;

  for(let i=0; i<cart.length; ++i){
    let itemVal = cart[i].count * cart[i].price;
    totalPrice+=itemVal
  }

  setTotal(totalPrice.toFixed(2));
}

const countItems = () => {
  let count=0;
  for(let i=0; i<cart.length; ++i){
    count+=cart[i].count 
  }

  setItemsCount(count);

}
  return (
    <BrowserRouter>
      <Navbar cartClick = {displayCart} cartActive={cartActive} itemsCount = {itemsCount}/>
      <div className="container">
        <div className={cartActive ? "App-active": "App"} >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products searchActive={searchActive} onSearchClick = {searchClick} items={cardArray} categories={categories} addToCart={addToCart} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
            
        </div>
        <div className= {cartActive ? "cart-display-active" : "cart-display"}  >
          <CartDisplay close={closeBtn} remove={removeItem} add={addItem} items={cart} total ={total}/>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
