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

const App = () =>{
  const[searchActive, setSearchActive] = useState(false);
  const [cardArray, setCardArray] = useState(
        [
          {
            image:buckethat1,
            desc:'Festival Essential bucket hat 2019',
            price:'19.99',
            id: uniqid(),
            category: "Bucket Hats"
          },
          {
            image: buckethat2,
            desc:'Ellie Special',
            price:'14.99',
            id: uniqid(),
            category: "Bucket Hats"
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


  const [cart, settCart] = useState([]);
  const [currentSelCart, setCurrentSelCart] = useState({});

  const escDown = (event) =>{
    if(event.keyCode===27){
      setSearchActive(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escDown, false);
    console.log([...cart])
  }, [cart])

  const searchClick = () => { 
    setSearchActive(true);
  }

  const addToCart = (event) => {
    let id = event.target.id;
    for(let i=0; i<=cardArray.length; ++i){
      if(cardArray[i].id===id){
        settCart([...cart, cardArray[i]]);
        break;
      }
      else{
        continue;
      }
    }


  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
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
    </BrowserRouter>
  );
}

export default App;
