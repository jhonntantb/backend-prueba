import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/actions/cart";
import "./CartProduct.css";
import Swal from "sweetalert2";

export default function CartProduct({ content, addPrice, removePrice }) {
  const dispatch = useDispatch();
  const [cant, setCant] = useState(content.cant);
  const [localPrice, setLocalPrice] = useState(content.price);
  const cart = useSelector((state) => state.cartReducer.cart);

  useEffect(() => {
    setLocalPrice(content.price * cant);
    var arr = cart.map((e) => (e.id == content.id ? { ...e, cant: cant } : e));
    localStorage.setItem("cart", JSON.stringify(arr));
    dispatch(getCart());
  }, [cant]);

  useEffect(
    () => addPrice({ id: content.id, value: localPrice }),
    [localPrice]
  );
  
  const removeAlert = () => {
    Swal.fire({
      title: "Estas Seguro?",
      text: "No se prodran revertir los cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ee8585",
      cancelButtonColor: "#212529",
      confirmButtonText: "Si, Borrar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        removePrice(content.id)
        var arr = cart.filter((e) => e.id != content.id);
        localStorage.setItem("cart", JSON.stringify(arr));
        dispatch(getCart());
      }
    });
  };
  
  const handleSum = () => {
    setCant(cant + 1);
  };

  const handleRes = () => {
    setCant(cant == 1 ? cant : cant - 1);
  };

  return (
    <div class="container-fluid pb-5 mt-n2 mt-md-n3">
      <div class="row">
        <div class="col-xl-12 col-md-8 col-sm-12">
          {/*<!-- Item-->*/}
          <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
            <div class="media d-block d-sm-flex text-center text-sm-left">
              <a class="cart-item-thumb mx-auto mr-sm-4" href="#">
                <img src={content.img} alt="Product" />
              </a>
              <div class="media-body pt-3 align-text-center">
                <h3 class="product-card-title font-weight-semibold border-0 pb-0 mx-5">
                  {content.title}
                </h3>
                <br />
                <span class="font-size-lg text-primary pt-5">
                  $ {content.price}
                </span>
              </div>
            </div>
            <div
              class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
              style={{ width: "10rem" }}
            >
              <div class="form-group mb-2">
                <label for="quantity1">Cantidad</label>

                <input
                  class="form-control form-control-sm text-center"
                  onChange={(e) => setCant(e.target.value)}
                  type="number"
                  id="quantity1"
                  value={cant}
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                />
                <div className="mt-3">
                  <button
                    className="btn btn-outline-dark btnmore"
                    onClick={handleSum}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-dark btnless"
                    onClick={handleRes}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                class="btn btn-outline-danger btn-sm btn-block mb-2"
                type="button"
                onClick={removeAlert}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-trash-2 mr-1"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                Borrar
              </button>
            </div>
          </div>
          {/*<div class="pt-4">
                <div class="accordion" id="cart-accordion">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="accordion-heading font-weight-semibold"><a href="#promocode" role="button" data-toggle="collapse" aria-expanded="true" aria-controls="promocode">Apply promo code<span class="accordion-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg></span></a></h3>
                        </div>
                        <div class="collapse show" id="promocode" data-parent="#cart-accordion">
                            <div class="card-body">
                                <form class="needs-validation" novalidate="">
                                    <div class="form-group">
                                        <input class="form-control" type="text" id="cart-promocode" placeholder="Promo code" required="">
                                        <div class="invalid-feedback">Please provide a valid promo code!</div>
                                    </div>
                                    <button class="btn btn-outline-primary btn-block" type="submit">Apply promo code</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h3 class="accordion-heading font-weight-semibold"><a class="collapsed" href="#shipping" role="button" data-toggle="collapse" aria-expanded="true" aria-controls="shipping">Shipping estimates<span class="accordion-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg></span></a></h3>
                        </div>
                        <div class="collapse" id="shipping" data-parent="#cart-accordion">
                            <div class="card-body">
                                <form class="needs-validation" novalidate="">
                                    <div class="form-group">
                                        <select class="form-control custom-select" required="">
                                            <option value="">Choose your country</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Finland">Finland</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="United States">United States</option>
                                        </select>
                                        <div class="invalid-feedback">Please choose your country!</div>
                                    </div>
                                    <div class="form-group">
                                        <select class="form-control custom-select" required="">
                                            <option value="">Choose your city</option>
                                            <option value="Bern">Bern</option>
                                            <option value="Brussels">Brussels</option>
                                            <option value="Canberra">Canberra</option>
                                            <option value="Helsinki">Helsinki</option>
                                            <option value="Mexico City">Mexico City</option>
                                            <option value="Ottawa">Ottawa</option>
                                            <option value="Washington D.C.">Washington D.C.</option>
                                            <option value="Wellington">Wellington</option>
                                        </select>
                                        <div class="invalid-feedback">Please choose your city!</div>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="ZIP / Postal code" required="">
                                        <div class="invalid-feedback">Please provide a valid zip!</div>
                                    </div>
                                    <button class="btn btn-outline-primary btn-block" type="submit">Calculate shipping</button>
                                </form>
                            </div>
                        </div>*/}
        </div>
      </div>
    </div>
  );
}
