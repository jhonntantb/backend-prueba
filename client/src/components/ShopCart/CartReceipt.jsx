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
            <Table>
                <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Individual Price</th>
                    <th>Cant</th>
                    <th>Price</th>
                </tr>
                <tbody>
                {cart.map((e, i) => {
                    return (
                    <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{e.title}</td>
                        <td>{e.price}</td>
                        <td>{e.cant}</td>
                        <td>{e.cant * e.price}</td>
                    </tr>
                    )
                })}
                </tbody>
            </Table>
            Total: {total}
        </div>
    )
} 