import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddressFrom from "../../components/ShopCart/AddressForm"
import CartReceipt from "../../components/ShopCart/CartReceipt"

export default function CartForm(){
    const [address, setAddress] = useState("")
    
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