import './App.css';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Contact from './pages/Contact.js';
import Navbar from './components/Navbar.js';
import CartDisplay from './components/CartDisplay';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import uniqid from "uniqid";

/*import images for products */
import buckethat1 from './buckethat1.jpg';
import buckethat2 from './buckethat2.jpg';
import tshirt1 from './tshirt1.jpg';
import facemask1 from './facemask1.jpg';


const App = () =>{
  const [searchActive, setSearchActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [cart, settCart] = useState([]);
  const [currentSelCart, setCurrentSelCart] = useState({});
  const [total, setTotal] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("All Products");
  const [searchState, setSearchState] = useState('');
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
          },
          {
            image: tshirt1,
            desc:'Old Curtain T-Shirt',
            price:'24.99',
            id: uniqid(),
            category: "T-Shirts",
            count:0
          },
          {
            image: facemask1,
            desc:'Trippy Green Red Yellow Face Mask',
            price:'5.99',
            id: uniqid(),
            category: "Face Masks",
            count:0
          },

        ]
      );
  
  const [filterCardArray, setFilterCardArray] = useState([...cardArray]);

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

  const onSearchSubmit = (e) => {
    console.log(searchState);
    e.preventDefault();
  }
  
  const changeSearchState = (event) => {
    setSearchState(event.target.value)
  }

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

  useEffect(() =>{
    filterCategory(selectedFilter)
  }, [selectedFilter])

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


const filterCategory = (value) => {
  if(value!=="All Products"){
    let copycardArray = [...cardArray];
    let newLst = [];
    for(let i=0; i<copycardArray.length; ++i){
      if(copycardArray[i].category===value){
        newLst.push(copycardArray[i]);
      }
    }
    setFilterCardArray([...newLst]);
  }
  else if(value==="All Products"){
    setFilterCardArray([...cardArray]);
  }

}


const filteredHeading = (event) => {
  let value = event.target.value;
  if(value!=="Clear Filters"){
    setSelectedFilter(value);
  }
  else if(value==="Clear Filters"){
    setSelectedFilter("All Products");
  }
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
              <Products searchActive={searchActive} onSearchClick = {searchClick} items={filterCardArray} categories={categories} addToCart={addToCart} 
                        categoryClick={filteredHeading} categoryHeader={selectedFilter} searchState={searchState}
                        onSearchChange={changeSearchState} onSearchSubmit={onSearchSubmit}/>
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
