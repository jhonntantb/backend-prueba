import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllOrder, updateOrder } from "../../redux/actions/order/index"
import AddressFrom from "../../components/ShopCart/AddressForm"
import CartReceipt from "../../components/ShopCart/CartReceipt"
import CreateCheckoutButton from '../../components/MPago/index';

export default function CartForm(){
    const dispatch = useDispatch()
    const [address, setAddress] = useState("")
    const order = useSelector(state => state.orderReducer.orders)
    const user = useSelector(state => state.userReducer.user)
    
    // useEffect(() => {

    // }, [user])

    useEffect(() => {
        updateOrder()
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
                <CreateCheckoutButton/>
            </div>
            }   
        </div>
    )
} 