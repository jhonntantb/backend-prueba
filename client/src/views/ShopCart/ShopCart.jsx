import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder, createOrder } from "../../redux/actions/order/index"
import { getCart } from "../../redux/actions/cart/index"
import ShowCartProducts from "../../components/ShopCart/ShowCartPoducts"

export default function ShopCart(){
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)
    const cart = useSelector(state => state.cartReducer.cart)
    const user =  useSelector(state => state.userReducer.user)
    const dbOrder = useSelector(state => state.orderReducer.orders)
    
    useEffect(() => {
        if(user.id)
            dispatch(getAllOrder(user.id, "cart"))
        else
            dispatch(getCart())
    }, [user])

    useEffect(() => {
        if(dbOrder.lenght <= 0) dispatch(createOrder({

        }))

    }, [dbOrder])
    
    const handleOrder = () => {
        
    }

    return cart.length > 0 ? 
        <div>
            {dbOrder ? <ShowCartProducts products={[ ...cart, ...dbOrder]} setTotal={setTotal}/>
            : 
            <ShowCartProducts products={cart} setTotal={setTotal}/>}
            
            Total: {total}
            <button onClick>Comprar</button>
        </div>
        : 
        <div>No hay articulos en tu carrito</div>
}