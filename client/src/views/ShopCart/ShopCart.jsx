import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder, createOrder } from "../../redux/actions/order/index";
import { getCart } from "../../redux/actions/cart/index";
import ShowCartProducts from "../../components/ShopCart/ShowCartPoducts";
import { useHistory } from "react-router-dom";

export default function ShopCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const [total, setTotal] = useState(0);
  const user = useSelector((state) => state.userReducer.user);
  const createdOrder = useSelector((state) => state.orderReducer.order);
  const dbOrders = useSelector((state) => state.orderReducer.orders);
  const history = useHistory();
  var carritoEnSession = localStorage.getItem("cart");

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    dispatch(getCart());
  }, [carritoEnSession]);

  // useEffect(() => {
  //     if(user.id)
  //         dispatch(getAllOrder(user.id, "cart"))
  //     else
  //         dispatch(getCart())
  // }, [user])

  // useEffect(() => {
  //     if(dbOrders.lenght <= 0)
  //     {
  //         dispatch(createOrder({
  //             status: "cart",
  //             total_price: total,
  //             home_address: "",
  //             location: "",
  //             province: "",
  //             country: "",
  //             delivery_date: "2021-08-20",
  //             userId: user.id,
  //             products: cart.map(e => {
  //                 return {
  //                     productId:e.id,
  //                     quantity: e.cant,
  //                     unitprice: e.price
  //                 }
  //             })
  //         }))
  //     }

  // }, [cart])

  //console.log("DBORDER: ", dbOrders);
  //console.log("cart: ", cart);

  useEffect(() => {
    dispatch(getAllOrder(user.id, "cart"));
  }, [createdOrder]);

  function orderCreator(cart) {
    console.log("cart en SHOPCART: ", cart);

    dispatch(
      createOrder({
        status: "cart",
        total_price: total,
        home_address: user.address,
        location: user.location,
        province: user.province,
        country: user.country,
        postal_code: 1111,
        phone_numer: 0,
        delivery_date: "2021-08-20",
        userId: user.id,
        products: cart.map((e) => {
          console.log("producto ", e);
          return {
            productId: e.id,
            quantity: e.cant,
            unitprice: e.price,
          };
        }),
      })
    );

    history.push("/cart/order");
  }

  return cart.length > 0 ? (
    <div>
      {dbOrders ? (
        <ShowCartProducts products={[...cart]} setTotal={setTotal} />
      ) : (
        <ShowCartProducts products={cart} setTotal={setTotal} />
      )}
      <div className="row justify-content-center">
      <div class="col align-self-center col-lg-6">
        <h2 class="h6 px-4 py-3 bg-secondary text-center">Total</h2>
        <div class="h3 font-weight-semibold text-center py-3">$ {total}</div>

        <h3 class="h6 pt-4 font-weight-semibold"><span class="badge badge-success mr-2">Note</span>Comentarios Adicionales</h3>
        <textarea class="form-control mb-3" id="order-comments" rows="5"></textarea>
        </div>
      </div>
      {/* <Link to="/cart/order"><button onClick={e=>orderCreator(cart)}>Confirmar</button></Link> */}
      <button onClick={(e) => orderCreator(cart)} class="btn btn-primary btn-block position-relative bottom-0 start-50 translate-middle-x" >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card mr-2 ">
          <rect x="1" y="4" width="20" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="20" y2="10"></line>
        </svg>Confirmar Pedido</button>
    
    </div>
  ) : (
    <div className="text-center text-dark mt-5">
      <h3 className="text-center ">No hay articulos en tu carrito</h3>
    </div>
  );
}
