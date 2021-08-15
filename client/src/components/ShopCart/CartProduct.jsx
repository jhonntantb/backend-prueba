import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroupItem } from "reactstrap";
import "./CartProduct.css"
import { Button } from "reactstrap";
import { getCart } from "../../redux/actions/cart";

export default function CartProduct({content, addPrice}){
    const dispatch = useDispatch()
    const [cant, setCant] = useState(content.cant)
    const [localPrice, setLocalPrice] = useState(content.price)
    const cart = useSelector(state => state.cartReducer.cart)
    
    useEffect(() => {
        setLocalPrice(content.price * cant)
        var arr = cart.map((e) => (e.id == content.id) ? {...e, cant: cant} : e)

        localStorage.setItem("cart", JSON.stringify(arr))
    }, [cant])

    useEffect(() => addPrice({id: content.id, value: localPrice}), [localPrice])

    const handleRemove = () => {
        var arr = cart.filter(e => e.id != content.id)
        localStorage.setItem("cart", JSON.stringify(arr))
        dispatch(getCart())
    }

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
            <Button onClick={handleRemove} close/>
        </ListGroupItem>
    )
}