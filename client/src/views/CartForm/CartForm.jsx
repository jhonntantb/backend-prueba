import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import AddressFrom from "../../components/ShopCart/AddressForm"
import CartReceipt from "../../components/ShopCart/CartReceipt"
import CreateCheckoutButton from '../../components/MPago/index';
import { getCart } from "../../redux/actions/cart";
import CheckUser from "../../components/Authentication/CheckUser/CheckUser";

export default function CartForm(){
    CheckUser();
    const history = useHistory()
    const dispatch = useDispatch()
    const [address, setAddress] = useState("")
    const user = useSelector(state => state.userReducer.user)
    const cart = useSelector(state => state.cartReducer.cart)

    useEffect(() => {
        history.push("/signin")
    }, [])

    useEffect(() => {
        dispatch(getCart())
    }, [address])

    return (
        <div>
            <div>
                <CartReceipt/>
                {address && <CreateCheckoutButton products={cart} direction={address}/>}
                {!address && <AddressFrom setAddress={setAddress}/>}
                <div className="container ">
                </div>
            </div>
        </div>
    )
} 