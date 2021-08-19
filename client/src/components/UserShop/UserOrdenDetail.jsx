import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getOrder } from '../../redux/actions/order'
import {updateOrderStatus} from "../../redux/actions/order/index"
import CreateReview from '../Review/CreateReview'

function UserOrdenDetail(props) {
   const id=props.match.params.id
   const dispatch = useDispatch()
   const {push}=useHistory()
   const [productId,setProductId]=useState("")
   const [productName,setProductName]=useState("")
   const [showReview,setShowReview]=useState(false)

   useEffect(() => {
       dispatch(getOrder(id))
   }, [])
   const order = useSelector(state => state.orderReducer.order)
   console.log(order)

   const handleUserShopStatus=(e)=>{
    e.preventDefault()
    dispatch(updateOrderStatus(id,"cancelled"))
    }
    const sendReview=(e)=>{
        e.preventDefault();
        setProductId(e.target.id);
        setProductName(e.target.value)
        setShowReview(true)
    }
    const viewShopping=(e)=>{
        e.preventDefault();
        push("/user/compras")
    }
   return (
        <div>
            <br />
            <h3>Detalle de la Orden</h3>
            <br />
            <div>
                <h4>Informacion de la Orden</h4>
                <p>Orden ID: {order.id}</p>
                <p>Status: {order.status}</p>
                <p>Date:</p>
                <p>{order.delivery_date}</p>
            </div>
            <br />
            <div>
                <h4>informacion de envio</h4>
                <p>Provincia: {order.province}</p>
                <p>Location:{order.location}</p>
                <p>Direccion:{order.home_address}</p>
            </div>
            <br />
            <div>
                <h4>Productos comprados</h4>
                {order.products&&order.products.length>0?order.products.map(e=>
                <div>
                    <p>Nombre: {e.title}</p>
                    <p>Cantidad: {e.Order_Product.quantity}</p>
                    <p>Precio/Unitario :{e.price}</p>
                    {(order.status==="delivered")?
                        <button id={e.id} value={e.title} onClick={e=>sendReview(e)}>Dejame tu Review</button>
                    :null}
                </div>
                ):null}
            </div>
            <br />
            <br />
            {showReview&&<div>
                <h4>Producto:{productName}</h4>
                <CreateReview match={productId}/>
            </div>}
            <br />
            <br />
            {order&&(order.status!=="cancelled" || order.status!=="delivered" || order.status!=="shipped")?
            <button onClick={e=>handleUserShopStatus(e)} >Cancelar mi Compra</button>
            :null}
            <br />
            <br />
            <button onClick={e=>viewShopping(e)} >Volver a Compras</button>

            
        </div>
    )
}

export default UserOrdenDetail
