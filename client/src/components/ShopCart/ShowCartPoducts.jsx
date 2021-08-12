import { List } from "@material-ui/core"
import { ListGroup } from "reactstrap"
import { useState, useEffect } from "react"
import CartProduct from "./CartProduct"

export default function ShowCartProduct({products, setTotal}){
    const [prices, setPrices] = useState([])
    
    useEffect(() => {
        let acum = 0
        
        for(let i = 0; i < prices.length; i++)
            acum += prices[i].value
        
        setTotal(acum)
    }, [prices])

    const addPrice = (newPrice) => {
        var arr = prices
        
        if(prices.find(price => price.id == newPrice.id))
            var arr = prices.map((price) => (price.id == newPrice.id) ? newPrice : price)
        else
            arr.push(newPrice)

        setPrices(arr)
    }

    return (
        <ListGroup id="cartList">
            {products.map(prod => <CartProduct addPrice={addPrice} content={prod}/>)}
        </ListGroup>
    )
}