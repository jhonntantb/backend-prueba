import { ListGroup } from "reactstrap"
import CartProduct from "./CartProduct"

export default function ShowCartProduct({products}){
    return (
        <div className="cartList">
            <ListGroup>
                {products.map(prod => <CartProduct content={prod}/>)}
            </ListGroup>
        </div>
    )
}