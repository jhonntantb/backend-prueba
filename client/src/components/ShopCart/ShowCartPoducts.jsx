import { List } from "@material-ui/core";
import { ListGroup } from "reactstrap";
import { useState, useEffect } from "react";
import CartProduct from "./CartProduct";
import "./ShowCartProduct.css";
import { NavLink } from "react-router-dom";

export default function ShowCartProduct({ products, setTotal }) {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    let acum = 0;

    for (let i = 0; i < prices.length; i++) acum += prices[i].value;

    setTotal(acum);
  }, [prices]);

  const removePrice = (id) => {
    var arr = prices
    arr = arr.filter(p => p.id != id)
    setPrices(arr)
  }

  const addPrice = (newPrice) => {
    var arr = prices;

    if (prices.find((price) => price.id == newPrice.id))
      var arr = prices.map((price) =>
        price.id == newPrice.id ? newPrice : price
      );
    else arr.push(newPrice);

    setPrices(arr);
  };

  return (
    <div >
      <h2 class="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-secondary"><span>Productos</span><NavLink class="font-size-sm" to="/productlist"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" style={{width: "1rem", height: "1rem;"}}><polyline points="15 18 9 12 15 6"></polyline></svg>Continuar Comprando</NavLink></h2>
        {products && products.map((prod) => (
          <CartProduct key={prod.id} addPrice={addPrice} removePrice={removePrice} content={prod} />
        ))}
    </div>
  );
}
