import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { getAllOrder } from '../../redux/actions/order'
import { getProduct } from '../../redux/actions/product'
import CardOrder from './CardOrder'

function Shopping() {
    const dispatch = useDispatch()
    const userid=localStorage.getItem('pg_merceria')
    
    console.log("este es el usuaario",userid)
    useEffect(() => {
        // get orders de un usuario????
        dispatch(getAllOrder(userid))
    }, [])
    const orders=useSelector(state=>state.orderReducer.orders)
    useEffect(() => {
        //orders.length>0&&dispatch(getProduct(orders.products[0].id))
    }, [orders])
    console.log(orders.products)
    return (
        <div>
            <br />
            <br />
            <h3>Pedidos Realizados</h3>
            {orders&&orders.length>0?orders.map(e=>
            <CardOrder status={e.status} products={e.products} total_price={e.total_price} />
            ): <p>Aún no tiene Pedidos</p> }
        </div>
    )
}

export default Shopping
