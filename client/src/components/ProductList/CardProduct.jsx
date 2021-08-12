import React from 'react';
import {NavLink} from "react-router-dom";
import "./CardProduct.css"

function CardProduct(props) {
  console.log("PROPS: ",props)
    return (
      <div class="container-fluid ">
      <div id="cardproduct"class="card" >
          <div class="text-center p-4"> <img id="main-image" src={props.url} width="300" height="300" /> 
          </div>
          <div class="thumbnail text-center"> 
            <img onclick="change_image(this)" src={props.url}/> 
            <img onclick="change_image(this)" src={props.url} /> 
            <img onclick="change_image(this)" src={props.url}/> 
          </div>
          <div class="about text-center"> 
                <NavLink to={`/product/${props.id}`}>
                  <a href="#" ><h6>{props.title}</h6></a>
                  </NavLink>    
            <span>${props.price}</span>
          </div>
          <div class="container-fluid">
            <div class="row">
          <div class="cart-button"> <button class="btn btn-dark text-uppercase">Add to cart</button>
              <div class="add"> 
                <span class="product_fav"><i class="fa fa-heart-o"></i></span> 
                <span class="product_fav"><i class="fa fa-info"></i></span> 
                </div>
                </div>
              </div>
          </div>
      </div>
   </div>
        
    )
}

export default CardProduct;