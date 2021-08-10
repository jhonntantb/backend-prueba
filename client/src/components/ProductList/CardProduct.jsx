import React from 'react'
import {NavLink} from "react-router-dom"

function CardProduct(props) {
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={props.url} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">${props.price}</p>
                <NavLink to={`/product/${props.id}`}>
                <a href="#" class="btn btn-primary">Detail</a>
                </NavLink>    
            </div>
        </div>
    )
}

export default CardProduct;