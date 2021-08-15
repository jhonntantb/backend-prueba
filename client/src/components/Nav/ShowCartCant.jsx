import React from 'react'

export  const ShowCartCant = () => {

    let cart = localStorage.getItem("cart") != undefined ? (JSON.parse(localStorage.getItem("cart"))) : [];
    console.log("CART: ",cart.length)
    return (
        cart.length
    )
}


