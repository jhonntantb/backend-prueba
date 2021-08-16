import { List } from "@material-ui/core";
import { ListGroup } from "reactstrap";
import { useState, useEffect } from "react";
import CartProduct from "./CartProduct";
import "./ShowCartProduct.css";

export default function ShowCartProduct({ products, setTotal }) {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    let acum = 0;

    for (let i = 0; i < prices.length; i++) acum += prices[i].value;

    setTotal(acum);
  }, [prices]);

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
    <>
      <div className="container-fluid pb-5 mt-n2 mt-md-n3">
        <div className="row">
          <div>
            <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-secondary">
              <span>Products</span>
            </h2>
            <a className="font-size-sm" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-left"
                style={{ width: "1rem", height: "1rem" }}
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Continue shopping
            </a>
          </div>

          {/* sidebar */}

          <div className="row justify-content-end">
            <div className="col-xl-6">
              <div>
                <h2 className="h6 px-4 py-3 bg-secondary text-center">
                  Subtotal
                </h2>
                <div className="h3 font-weight-semibold text-center py-3">
                  {" "}
                  $600
                </div>
                <hr />
                <a className="btn btn-primary btn-block" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-credit-card mr-2"
                  >
                    <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                    <line x1={1} y1={10} x2={23} y2={10} />
                  </svg>
                  Proceder al checkout
                </a>
              </div>
            </div>
          </div>
        </div>

        {products.map((prod) => (
          <CartProduct addPrice={addPrice} content={prod} />
        ))}
      </div>
    </>
  );
}
