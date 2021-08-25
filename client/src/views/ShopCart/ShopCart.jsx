import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/actions/cart/index";
import ShowCartProducts from "../../components/ShopCart/ShowCartPoducts";
import CheckUser from "../../components/Authentication/CheckUser/CheckUser";
import  Swal  from 'sweetalert2';

export default function ShopCart(props) {
  CheckUser();
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const cart = useSelector(state => state.cartReducer.cart)
  const user =  useSelector(state => state.userReducer.user)

  useEffect(() => user.id ? dispatch(getCart(user.id)) : dispatch(getCart()), [user])

  const noProductCart = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Parece que no hay productos en tu carrito',
      confirmButtonText: `Ok`,
      confirmButtonColor: "#ee8585",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        props.history.push("/productlist")}})
    }

  return cart.length > 0 ? (
    <div className="cartm" style={{marginTop: "5%"}}>
        <ShowCartProducts products={cart} setTotal={setTotal} />
      <div className="row justify-content-center">
      <div class="col align-self-center col-lg-6">
        <h2 class="h6 px-4 py-3 bg-secondary text-center">Total</h2>
        <div class="h3 font-weight-semibold text-center py-3">$ {total}</div>

        {/* <h3 class="h6 pt-4 font-weight-semibold"><span class="badge badge-success mr-2">Note</span>Comentarios Adicionales</h3>
        <textarea class="form-control mb-3" id="order-comments" rows="5"></textarea> */}
        </div>
      </div>
        
      <Link to="/cart/order">
          <button  class="btn btn-primary btn-block position-relative bottom-0 start-50 translate-middle-x" >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card mr-2 ">
          <rect x="1" y="4" width="20" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="20" y2="10"></line>
        </svg>Iniciar Pedido</button>
        </Link>
     </div>
  ) : (
    <div className="text-center text-dark"style={{marginTop: "5%"}}>
      <h3 className="text-center ">{noProductCart()}</h3>
    </div>
  );
}
