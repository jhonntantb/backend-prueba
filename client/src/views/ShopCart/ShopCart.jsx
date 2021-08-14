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
    const createdOrder = useSelector(state => state.orderReducer.order)
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
                delivery_date: "2021-08-20",
                userId: user.id,
                products: cart.map(e => {
                    return {
                        productId:e.id,
                        quantity: e.cant,
                        unitprice: e.price
                    }
                })
            }))
        }

    }, [dbOrder])

    useEffect(() => {
        dispatch(getAllOrder(user.id, "cart"))
    }, [createdOrder])

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