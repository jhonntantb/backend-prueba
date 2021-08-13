import React from "react";
import { NavLink } from "react-router-dom";
import "./CardProduct.css";

function CardProduct(props) {
  const handleAddCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"))
    const prod = {
        id: props.id,
        title: props.title,
        price: props.price,
        cant: 1,
        img: props.url
    }

    if(cart){
        if (cart.find((e) => e.id == prod.id))
            alert("El producto ya esta agregado al carrito") 
        else {
          localStorage.setItem("cart", JSON.stringify([...cart, prod])) 
        }  
    } 
    else  {
       localStorage.setItem("cart", JSON.stringify([prod]))
        alert("Producto agregado")
    }
  }

  return (

        <div class="card" >
          <div class="text-center p-4">
            {" "}
            <img id="main-image" src={props.url} width="300" />
          </div>
          <div class="about text-center">
            <NavLink to={`/product/${props.id}`}>
              <a href="#">
                <h6>{props.title}</h6>
              </a>
            </NavLink>
            <span>${props.price}</span>
          </div>
          <div class="cart-button mt-3 px-2 d-flex justify-content-around align-items-center h-100">
            {" "}
            <button class="btn btn-dark text-uppercase " onClick={handleAddCart}>Add to cart</button>
            <div class="add">
              <span class="product_fav">
                <i class="fa fa-heart-o"></i>
              </span>
            </div>
          </div>
        </div>
  );
}

export default CardProduct;
