import './App.css';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Contact from './pages/Contact.js';
import Navbar from './components/Navbar.js';
import CartDisplay from './components/CartDisplay';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import uniqid from "uniqid";
import { useHistory } from "react-router-dom";

/*import images for products */
import buckethat1 from './buckethat1.jpg';
import buckethat2 from './buckethat2.jpg';
import tshirt1 from './tshirt1.jpg';
import facemask1 from './facemask1.jpg';


const App = () =>{
  const [searchActive, setSearchActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [cart, setCart] = useState([]);
  const [uniqueCart, setUniqueCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("All Products");
  const [searchState, setSearchState] = useState("");
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
      setSelectedFilter("All Products");
      setSearchState("");
;    }
  }



  useEffect(() => {
    totalPrice();
    countItems();
    let addCartInput = document.querySelectorAll(".add-cart-btn");
    addCartInput.forEach((input) =>{
      input.disabled = false;
    })
   

  }, [cart])

  useEffect(() =>{
    filterCategory(selectedFilter)
  }, [selectedFilter])

  useEffect(() => {
    filterSearch();
  }, [searchState])



  useEffect(() => {

      document.addEventListener("keydown", escDown, false);
      return () => {
        setSearchState('');
        document.addEventListener("keydown", escDown, false);
      }
    
  }, [searchActive]);

  const searchClick = () => { 
    setSearchActive(true);
  
  }

  const addToCart = (event) => {
    //event.target.disabled = true;
    let addCartInput = document.querySelectorAll(".add-cart-btn");
    addCartInput.forEach((input) =>{
      input.disabled = false;
    })
    let id = event.target.id;
    let targetedObject = cardArray.filter((item) => item.id===id)[0];
    let cartCopy = [...cart];
    let cartCheck = cartCopy.map((e) => e.id ).indexOf(targetedObject.id);
    if(cartCheck===-1){
      targetedObject.count = targetedObject.count + 1;
      setCart([...cartCopy, targetedObject]);
    }
    else if(cartCheck!==-1){
      targetedObject.count = targetedObject.count + 1;
      cartCopy[cartCheck] = targetedObject;
      setCart([...cartCopy]);
    }
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
          setCart([...copyCartrray]);
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
      setCart([...copyCartrray]);
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

const filterSearch = () => {
  let allStr = "All Products"
  let value = searchState;
  if(value!==allStr){
    let copycardArray = [...cardArray];
    let newLst = [];
    for(let i=0; i<copycardArray.length; ++i){
      //if(copycardArray[i].category===value){
        if(copycardArray[i].category.toUpperCase().startsWith(value.toUpperCase())){
        newLst.push(copycardArray[i]);
      }
    }
    setFilterCardArray([...newLst]);
  }
  else if(allStr.startsWith(value)){
    setFilterCardArray([...cardArray]);
  }

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
    setSearchState(value);
  }
  else if(value==="Clear Filters"){
    console.log("clear filter")
    setSelectedFilter("All Products");
    setSearchState("");
;  }
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
            <Route exact path="/products">
              <Products searchActive={searchActive} onSearchClick = {searchClick} items={filterCardArray} categories={categories} addToCart={addToCart} 
                        categoryClick={filteredHeading} categoryHeader={selectedFilter} searchState={searchState}
                        onSearchChange={changeSearchState} onSearchSubmit={onSearchSubmit}/>
            </Route>
            <Route exact path="/contact">
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
