import React from "react";
import { NavLink } from "react-router-dom";
import "./CardProduct.css";

function CardProduct(props) {
  return (
    <div className="container d-flex justify-content-center">
      <div class="wrapper">
        <div class="card">
          <div class="text-center p-4">
            {" "}
            <img id="main-image" src={props.url} width="300" />
          </div>
          <div class="thumbnail text-center">
            <img onclick="change_image(this)" src={props.url} width="70" />
            <img onclick="change_image(this)" src={props.url} width="70" />
            <img onclick="change_image(this)" src={props.url} width="70" />
          </div>
          <div class="about text-center">
            <NavLink to={`/product/${props.id}`}>
              <a href="#" class="btn btn-primary">
                <h6>{props.title}</h6>
              </a>
            </NavLink>
            <span>${props.price}</span>
          </div>
          <div class="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
            {" "}
            <button class="btn btn-dark text-uppercase">Add to cart</button>
            <div class="add">
              <span class="product_fav">
                <i class="fa fa-heart-o"></i>
              </span>
              <span class="product_fav">
                <i class="fa fa-opencart"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
