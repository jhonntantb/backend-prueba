import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { Link, NavLink, useHistory} from "react-router-dom"
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
            <p>Las ordenes de todos los usuarios</p>
            <div>
                {orderView&&orderView.length>0?
                <table>
                <thead>
                    <tr>
                        <th>Orden ID</th>
                        <th>Usuario nombre</th>
                        <th>Usuario Email</th>
                        <th>Precio Total</th>
                        <th>Estado</th>
                        <th>Fecha de Pedido</th>
                        <th># Productos</th>
                        <th>detalle</th>
                    </tr>
                </thead>
                {orderView.map(e=>
                    <tbody>
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.user.user_name}</td>
                            <td>{e.user.email}</td>
                            <td>{e.total_price}</td>
                            <td>{e.status}</td>
                            <td>{e.date}</td>
                            <td>{e.products.length}</td>
                            <NavLink  to={`/admin/orders/${e.id}`} ><td>detalles</td></NavLink>
                            
                        </tr>
                    </tbody>)}
                </table>
                :null}
            </div>
        </div>
    )
}

export default Order
