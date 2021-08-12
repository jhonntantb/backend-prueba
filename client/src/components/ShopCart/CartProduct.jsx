import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ListGroupItem } from "reactstrap";
import "./CartProduct.css"

export default function CartProduct({content, addPrice}){
    const [cant, setCant] = useState(content.cant)
    const [localPrice, setLocalPrice] = useState(content.price)
    
    useEffect(() => {
        setLocalPrice(content.price * cant)
        var cart = JSON.parse(localStorage.getItem("cart"))

        cart = cart.map((e) => (e.id == content.id) ? {...e, cant: cant} : e)

        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cant])

    useEffect(() => addPrice({id: content.id, value: localPrice}), [localPrice])

    return (
        <ListGroupItem id="cartProduct">
            <Link to={"/product/" + content.id} style={{ textDecoration: 'none', color: "blue"}}>
                <img id="cartProductImage" className="inline" src={content.img} height="100px" width="100px"/>
                <div id="cartProductTitle" className="inline">{content.title + "   "}</div>
                <div id="cartProductPrice" className="inline">${localPrice}</div>
            </Link>
            <div id="cartProductCant" className="inline">
                Cant:
                <input id="cartProductCantValue" type="number" min="1" max="10000" onChange={e => setCant(e.target.value)} value={cant}/>
            </div>
        </ListGroupItem>
    )
}