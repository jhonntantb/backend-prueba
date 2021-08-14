import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllOrder } from "../../redux/actions/order/index"
import AddressFrom from "../../components/ShopCart/AddressForm"
import CartReceipt from "../../components/ShopCart/CartReceipt"

export default function CartForm(){
    const dispatch = useDispatch()
    const [address, setAddress] = useState("")
    const order = useSelector(state => state.orderReducer.orders)
    const user = useSelector(state => state.userReducer.user)
    console.log(user)
    useEffect(() => {

    }, [user])

    useEffect(() => {
        
    }, [order])

    useEffect(() => {
        dispatch(getAllOrder(user.dispatch, "cart"))
    }, [address])

    return (
        <div>
            {!address ? 
            <AddressFrom setAddress={setAddress}/>
            :
            <div>
                <CartReceipt/>
                <button>Pagar</button>
            </div>
            }  
        </div>
    )
} 