import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch} from "react-redux"
import { getOrder } from '../../../redux/actions/order'

function OrderDetail(props) {
    var admin = localStorage.getItem("admin")
    const id=props.match.params.id
    const dispatch=useDispatch()
    const [modifi,setmodifi]=useState(false)
    const [status,setStatus]=useState("")
    useEffect(() => {
        dispatch(getOrder(id))
    }, [])
    //el id nmos servira paar modificar el status de la order
    //solo eso manipulara el admin
    //nos traemos la orden y mostramos toda la info
    const detailOrder=useSelector(state => state.orderReducer.order)
    
    const handleClick=(e)=>{
        e.preventDefault()
        setmodifi(!modifi)
    }
    useEffect(()=>{
    },[detailOrder])
    const handleStatusClick=(e)=>{
        dispatch(id,)
    }
    const handleStatusChange=(e)=>{
        setStatus(e.target.value)
    }
    console.log("detalle",detailOrder)
    return admin!=='null'?(
        <div>
            <br />
            <h3>Detalle del Producto</h3>
            <div>
                {(!Array.isArray(detailOrder))&&(typeof detailOrder==="object")?
                <div>
                    <div>
                        <h5>Detalle de la Orden</h5>
                        <table>
                            <thead>
                                <tr>
                                <th>Orden ID</th>
                                <th>Estado</th>
                                <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{detailOrder.id}</td>
                                    <td>{detailOrder.status}</td>
                                    <td>{detailOrder.delivery_date}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h5>Detalle del usuario</h5>
                        <table>
                            <thead>
                                <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>N° de Contacto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{detailOrder.user.first_name}</td>
                                    <td>{detailOrder.user.last_name}</td>
                                    <td>{detailOrder.user.email}</td>
                                    <td>9807896789</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h5>Datos de Entrega</h5>
                    <table>
                            <thead>
                                <tr>
                                <th>Provincia</th>
                                <th>Locación</th>
                                <th>Dirección</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{detailOrder.province}</td>
                                    <td>{detailOrder.location}</td>
                                    <td>{detailOrder.home_address}</td>
                                </tr>

                            </tbody>
                        </table>     
                    </div>
                    <div>
                        <h5>Detalles del producto</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Catologo ID</th>
                                    <th>Nombre del Producto</th>
                                    <th>Precio</th>
                                    <th>Cantida Comprada</th>
                                    <th>Precio Total</th>
                                </tr>
                            </thead>
                            {detailOrder.products.map(e=>
                                <tr>
                                    <td>{e.catalog_id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.price}</td>
                                    <td>{e.Order_Product.quantity}</td>
                                    <td>{e.Order_Product.totalcost}</td>
                                </tr>
                                )}
                        </table>
                    </div>
                    <button onClick={e=>handleClick(e)} >Modificar</button>
            {modifi?
            <div>
            <div>
            <label htmlFor="status">Modificar Estados</label>
            <input type="text" name="status" list="status" onChange={e=>handleStatusChange(e)}/>
            <datalist id="status">
                <option value={"shipped"}>Enviada</option>
                <option value="cart">Carro</option>
                <option value="'checkout">Pagado</option>
                <option value="cancelled">Cancelado</option>
                <option value="delivered">Entregado</option>
            </datalist>
            </div>
            <button onClick={e=>handleStatusClick(e)}>Enviar Cambios</button>
            </div>
            :null}

                </div>
                :<p>No productos</p>}
            </div>
            
        </div>
    ):null;
}

export default OrderDetail
