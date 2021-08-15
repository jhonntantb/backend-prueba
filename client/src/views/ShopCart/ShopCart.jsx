import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../redux/actions/order/index"
import ShowCartProducts from "../../components/ShopCart/ShowCartPoducts"

export default function ShopCart(){
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)
    const [order, setOrder] = useState("")
    const user =  useSelector(state => state.userReducer.user)
    const dbOrder = useSelector(state => state.orderReducer.order)
    
    useEffect(() => {
        /*if(user.id)
            dispatch(getOrder(user.id))
        else*/
            setOrder(JSON.parse(localStorage.getItem("cart")))
    }, [user])

    return order ? 
        <div>
            {dbOrder ? <ShowCartProducts products={[ ...order]} setTotal={setTotal}/>
            : <ShowCartProducts products={order} setTotal={setTotal}/>}
            
            Total: {total}
        </div>
        : <div>No hay articulos en tu carrito</div>
}