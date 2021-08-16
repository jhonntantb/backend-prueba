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

  console.log("DBORDER: ", dbOrders);
  console.log("cart: ", cart);

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
      Total: {total}
      {/* <Link to="/cart/order"><button onClick={e=>orderCreator(cart)}>Confirmar</button></Link> */}
      <button onClick={(e) => orderCreator(cart)}>Confirmar Pedido</button>
    </div>
  ) : (
    <div className="text-center text-dark mt-5">
      <h4 className="text-dark">No hay articulos en tu carrito</h4>
    </div>
  );
}
