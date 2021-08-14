import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { Link, useHistory} from "react-router-dom"
import { getAllOrder, getOrder } from '../../../redux/actions/order'
import CardOrder from './CardOrder'

function Order() {
    const dispatch= useDispatch()
    const [orderView,setOrderView]=useState([])
    const [status,setStatus]=useState("")

    const orders=useSelector(state=>state.orderReducer.orders)

    useEffect(() => {
        dispatch(getAllOrder())
    }, [])
    useEffect(() => {
       setOrderView(orders)
    }, [orders])
    const handleStatus=(e)=>{
        setStatus(e.target.value)
    }
    useEffect(() => {
        setOrderView(orders.filter(e=>e.status===status))
    }, [status])
    return (
        <div>
            <br />
            <br />
            <div>
            <div><button onClick={e=>handleStatus(e)} value={'shipped'} >Enviada</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'cart'}>Carro</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'checkout'}>Pagado</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'cancelled'}>Cancelado</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'delivered'}>Entregado</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'approved'}>Aprovado</button></div>
            <div><button onClick={e=>handleStatus(e)} value={'rejected'}>Rechazado</button></div>
            </div>
            <p>Las ordenes de todos los usuarios!</p>
            <div>
                {orderView&&orderView.length>0?orderView.map(e=>
                <Link to={`/admin/orders/${e.id}`} key={e.id} >
                <CardOrder 
                id={e.id} 
                user={e.user.user_name}
                email={e.user.email}
                total_price={e.total_price}
                status={e.status}
                date={e.date} 
                amount={e.products.length} 
                />
                </Link>
                )
                
                :null}
            </div>
        </div>
    )
}

export default Order
