import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrder } from "../../redux/actions/order/index"
import { getCart } from "../../redux/actions/cart/index"

export  const ShowCartCant = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer.cart)
    const order = useSelector(state => state.orderReducer.orders)
    const user =  useSelector(state => state.userReducer.user)
    const [cant, setCant] = useState(0)

    useEffect(() => {
        if(user.id)
          dispatch(getAllOrder(user.id, "cart"))
        else
          dispatch(getCart())
    }, [user])

    useEffect(() => {
        if(order.length) setCant(order[0].products.length)
    }, [order])

    useEffect(() => {
        if(cart)
            cart.length > 0 ? setCant(cart.length) : setCant(0)
        else
            setCant(0)
    }, [cart])
    
    return cant
}


