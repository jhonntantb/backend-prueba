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

    //useEffect(() => user.id && dispatch(getAllOrder(user.id, "cart")), [cart])

    // useEffect(() => {
    //     if(user.id)
    //     {
    //         if(!order)
    //             dispatch(createOrder({
    //                 status: "cart",
    //                 total_price: total,
    //                 home_address: user.address,
    //                 location: user.location,
    //                 province: user.province,
    //                 country: user.country,
    //                 postal_code: 1111,
    //                 phone_numer: 0,
    //                 delivery_date: "2021-08-20",
    //                 userId: user.id,
    //                 products: cart.map(e => {
    //                     console.log('producto ' , e )
    //                     return {
    //                         productId:e.id,
    //                         quantity: e.cant,
    //                         unitprice: e.price
    //                     }
    //                 })
    //             }))
    //         else
    //             dispatch(updateOrder(order.id, {...order, products: cart}))
    //     }
    // }, [order])

    //const handleConfirmar = () => history.push("/cart/order")

    return cart.length > 0 ? 
        <div>
            <ShowCartProducts products={cart} setTotal={setTotal}/>
            Total: {total}
            <Link to="/cart/order"><button>Siguiente</button></Link>
        </div>
        :
        <div>No hay articulos en tu carrito</div>
}