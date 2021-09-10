import './App.css';
import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Contact from './pages/Contact.js';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import React, {useState, useEffect} from 'react';

const App = () =>{
  const[searchActive, setSearchActive] = useState(false);

  const escDown = (event) =>{
    if(event.keyCode===27){
      setSearchActive(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escDown, false);
  })

  const searchClick = () => { 
    setSearchActive(true);
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
            <Products searchActive={searchActive} onSearchClick = {searchClick} />
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
