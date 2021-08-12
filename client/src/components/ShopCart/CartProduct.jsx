import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ListGroupItem } from "reactstrap";
import "./CartProduct.css"

export default function CartProduct({content, addPrice}){
    const [cant, setCant] = useState(1)
    const [localPrice, setLocalPrice] = useState(content.price)
    console.log("precio: " + localPrice)
    useEffect(() =>{
        setLocalPrice(content.price * cant)
    }, [cant])

    useEffect(() => addPrice({id: content.id, value: localPrice}), [localPrice])

    const handleCant = (e) => {
        setCant(e.target.value)
    }

    return (
        <ListGroupItem id="cartProduct">
            <Link to={"/product/3b5bcc3c-2a4c-4e78-a278-fc11a73818c8"} style={{ textDecoration: 'none', color: "blue"}}>
                <img id="cartProductImage" className="inline" src={content.img} height="100px" width="100px"/>
                <div id="cartProductTitle" className="inline">{content.title + "   "}</div>
                <div id="cartProductPrice" className="inline">${localPrice}</div>
            </Link>
            <div id="cartProductCant" className="inline">
                Cant:
                <input id="cartProductCantValue" type="number" min="1" max="10000" onChange={handleCant} value={cant}/>
            </div>
        </ListGroupItem>
    )
}