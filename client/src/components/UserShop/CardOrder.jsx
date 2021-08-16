import React,{ useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getProduct } from '../../redux/actions/product'
import "./CardOrder.css"

function CardOrder(props) {
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getProduct(props.products[0].id))
}, [])

const product = useSelector(state => state.productReducer.product)
var color="";
if(props.status==="approved") color="green"
if(props.status==="rejected") color="red"
if(props.status==="shipped") color="orange"
if(props.status==="delivered") color="blue"
if(props.status==="cart") color="yellow"
if(props.status==="checkout") color="brown"
console.log(product)

    return (
        <div className="cardUserOrder">
            <div>
                {
                    product.length>0?<img src={product.productimages[0].image_url} alt="Not Fount" />:null
                }
                <img src={props.img} alt="No Encontrado" />
            </div>
            <br />
            <div>
                <p>Estado: <span style={{color:color,fontSize: "20px"}}>{props.status}</span></p>
                <p>Productos comprados</p>
                <ul>
                    {props.products.map(e=> <li>{e.title}</li> )}
                </ul>
                <p>Precio Total: {props.total_price}</p>
            </div>
            {/* <div>
                <NavLink>Ver Compra</NavLink>
            </div> */}
              
        </div>
    )
}

export default CardOrder
