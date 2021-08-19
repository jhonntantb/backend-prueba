import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/actions/cart";
import "./CartProduct.css";

export default function CartProduct({ content, addPrice, removePrice }) {
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
    removePrice(content.id)
    var arr = cart.filter((e) => e.id != content.id);
    localStorage.setItem("cart", JSON.stringify(arr));
    dispatch(getCart());
  };

  return (
    <div class="container-fluid pb-5 mt-n2 mt-md-n3">
    <div class="row">
        <div class="col-xl-12 col-md-8 col-sm-12">
            <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                <div class="media d-block d-sm-flex text-center text-sm-left">
                    <a class="cart-item-thumb mx-auto mr-sm-4" href="#"><img src={content.img} alt="Product"/></a>
                    <div class="media-body pt-3 align-text-center">
                        <h3 class="product-card-title font-weight-semibold border-0 pb-0 mx-5">{content.title}</h3>
                        <br />
                        <span class="font-size-lg text-primary pt-5">$ {content.price}</span>
                    </div>
                </div>
                <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style={{width: "10rem"}}>
                    <div class="form-group mb-2">
                        <label for="quantity1">Cantidad</label>
                        <input class="form-control form-control-sm" onChange={(e) => setCant(e.target.value)} type="number" id="quantity1" value={cant}/>
                    </div>
                    <button class="btn btn-outline-danger btn-sm btn-block mb-2" type="button" onClick={handleRemove}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 mr-1">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Quitar
                    </button>
                </div>
            </div>
        </div>
    </div>
</div> );
}
