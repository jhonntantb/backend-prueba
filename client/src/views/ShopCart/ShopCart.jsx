import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder, createOrder, updateOrder } from "../../redux/actions/order/index"
import { getCart } from "../../redux/actions/cart/index"
import ShowCartProducts from "../../components/ShopCart/ShowCartPoducts"
import {useHistory} from 'react-router-dom';

export default function ShopCart(){
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)
    const cart = useSelector(state => state.cartReducer.cart)
    const order = useSelector(state => state.orderReducer.orders)
    const user =  useSelector(state => state.userReducer.user)
    const history = useHistory();

    useEffect(() => user.id ? dispatch(getCart(user.id)) : dispatch(getCart()), [user])

    return cart.length > 0 ? 
        <div>
            <ShowCartProducts products={cart} setTotal={setTotal}/>
            Total: {total}
            <Link to="/cart/order"><button>Siguiente</button></Link>
        </div>
        :
        <div>No hay articulos en tu carrito</div>
}