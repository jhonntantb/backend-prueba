import React,{ useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import "./CardOrder.css"

function CardOrder(props) {
    const dispatch = useDispatch()
    const [disabled,setDisabled]=useState(false)

    var color="";
    if(props.status==="approved") color="green" ; 
    if(props.status==="rejected") color="red" ; 
    if(props.status==="shipped") color="orange"  ;
    if(props.status==="delivered") color="blue"; 
    if(props.status==="cart") color="yellow" ;
    if(props.status==="checkout") color="brown" ;
    if(props.status==="cancelled") color="red" ;

    

    return (
        <div className="cardUserOrder">
            <br />
            <div>
                <p>Estado: <span style={{color:color,fontSize: "20px"}}>{props.status}</span></p>
                <p>Productos comprados</p>
                <ul>
                    {props.products.map(e=> <li>{e.title}</li> )}
                </ul>
                <p>Precio Total: {props.total_price}</p>
            </div>
            <div>
                <div>
                <NavLink to={"/user/compras/" + props.id}><button>Ver Compras</button></NavLink>
                </div>
            </div>
              
        </div>
    )
}

export default CardOrder
