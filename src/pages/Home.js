import React from "react";
import clothes from '../clothes.jpg'
import recycle from '../recycle.jpg'
import {NavLink} from 'react-router-dom';

const Home = () => (
  <div className="home" >

      <div className="home-desc">
        <h3>
          "Reducing Waste -
              By Bringing Life Back To Pre-Loved Textiles"
        </h3>
        <NavLink className="shop-now" to="/products" exact>Shop Now</NavLink>
        <img src={recycle} alt="recycle"></img>
      </div>
  
  </div>
);

export default Home;