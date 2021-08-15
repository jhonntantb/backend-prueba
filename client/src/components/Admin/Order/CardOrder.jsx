import React from 'react'
import { NavLink } from 'react-router-dom'

function CardOrder(props) {
    return (
        <div>
                <h4>ID Orden: {props.id}</h4>
                <h4>Usuario:{props.user}</h4>
                <h4>Email:{props.email}</h4>
                <h4>Pecio Total:{props.total_price}</h4>
                <h4>Estado: {props.status}</h4>
                <p>Fecha de pedido: {props.date}</p>                
                <p>Cantidad: {props.amount}</p>
              
        </div>
    )
}

export default CardOrder
