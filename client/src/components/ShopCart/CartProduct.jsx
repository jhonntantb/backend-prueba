import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroupItem } from "reactstrap";
import "./CartProduct.css";
import { Button } from "reactstrap";
import { getCart } from "../../redux/actions/cart";

export default function CartProduct({ content, addPrice }) {
  const dispatch = useDispatch();
  const [cant, setCant] = useState(content.cant);
  const [localPrice, setLocalPrice] = useState(content.price);
  const cart = useSelector((state) => state.cartReducer.cart);

  useEffect(() => {
    setLocalPrice(content.price * cant);
    var arr = cart.map((e) => (e.id == content.id ? { ...e, cant: cant } : e));

    localStorage.setItem("cart", JSON.stringify(arr));
  }, [cant]);

  useEffect(
    () => addPrice({ id: content.id, value: localPrice }),
    [localPrice]
  );

  const handleRemove = () => {
    var arr = cart.filter((e) => e.id != content.id);
    localStorage.setItem("cart", JSON.stringify(arr));
    dispatch(getCart());
  };

  return (
    <div className="d-inline-flex my-4 pb-4 border-bottom">
      <div className="media d-block d-sm-flex text-center text-sm-left">
        <a className="cart-item-thumb mx-auto mr-sm-4">
          <img id="cartProductImage" src={content.img} />
        </a>

        <div className="media-body pt-3">
          <h3 className="product-card-title font-weight-semibold border-0 pb-0">
            {content.title + "   "}
          </h3>
          <div className="font-size-lg text-primary pt-2">${localPrice}</div>
        </div>
      </div>

      <div className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left">
        <div className="form-group mb-2">
          <label>Cantidad</label>
          <input
            id="cartProductCantValue"
            className="form-control form-control-sm"
            type="number"
            min="1"
            max="10000"
            defaultValue={1}
            onChange={(e) => setCant(e.target.value)}
            value={cant}
          />
        </div>
        <div>
          <button
            className="btn btn-outline-danger btn-sm btn-block mb-2"
            onClick={handleRemove}
          >
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
              className="feather feather-trash-2 mr-1"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1={10} y1={11} x2={10} y2={17} />
              <line x1={14} y1={11} x2={14} y2={17} />
            </svg>
            Quitar del carrito
          </button>
        </div>
      </div>
    </div>
  );
}

//cambiar el boton de x por "quitar del carrito"
