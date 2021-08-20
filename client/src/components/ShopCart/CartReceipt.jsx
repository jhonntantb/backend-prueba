import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Table } from "reactstrap"
import { getCart } from "../../redux/actions/cart/index"

export default function CartReceipt() {
    const [total, setTotal] = useState(0)
    const cart = useSelector(state => state.cartReducer.cart)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getCart()), [])
    useEffect(() => {
        setTotal(cart.reduce((acum, e) => acum + (e.price * e.cant), 0))
    }, [cart])

    return (
        <div>
            <Table className="container-fluid my-3">
                <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Precio Individual</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
                <tbody>
                {cart.map((e, i) => {
                    return (
                    <tr>
                        <th className="text-dark">{i + 1}</th>
                        <td>{e.title}</td>
                        <td>{e.price}</td>
                        <td>{e.cant}</td>
                        <td>{e.cant * e.price}</td>
                    </tr>
                    )
                })}
                </tbody>
            </Table>
            <h4 className="text-end mx-5 ">Total: {total}</h4>
        </div>
    )
} 