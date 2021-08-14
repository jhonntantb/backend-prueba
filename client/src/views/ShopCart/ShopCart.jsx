import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder, createOrder } from "../../redux/actions/order/index"
import { getCart } from "../../redux/actions/cart/index"
import ShowCartProducts from "../../components/ShopCart/ShowCartPoducts"

export default function ShopCart(){
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer.cart)
    const [total, setTotal] = useState(cart.total)
    const user =  useSelector(state => state.userReducer.user)
    const dbOrder = useSelector(state => state.orderReducer.orders)
    
    useEffect(() => {
        if(user.id)
            dispatch(getAllOrder(user.id, "cart"))
        else
            dispatch(getCart())
    }, [user])

    useEffect(() => {
        if(dbOrder.lenght <= 0)
        {
            dispatch(createOrder({
                status: "cart",
                total_price: 0,
                home_address: "",
                location: "",
                province: "",
                country: "",
                delivery_date: "00-00-0000",
                userId: user.id
            }))
            dispatch(getAllOrder(user.id, "cart"))
        } 
    }, [dbOrder])

    return cart.length > 0 ? 
        <div>
            {dbOrder ? <ShowCartProducts products={[ ...cart, ...dbOrder]} setTotal={setTotal}/>
            : 
            <ShowCartProducts products={cart} setTotal={setTotal}/>}
            
            Total: {total}
            <Link to="/cart/order"><button>Comprar</button></Link>
        </div>
        : 
        <div>No hay articulos en tu carrito</div>
}