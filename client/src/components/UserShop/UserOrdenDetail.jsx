import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getOrder } from "../../redux/actions/order";
import { updateOrderStatus } from "../../redux/actions/order/index";
import CreateReview from "../Review/CreateReview";

function UserOrdenDetail(props) {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    dispatch(getOrder(id));
  }, []);
  const order = useSelector((state) => state.orderReducer.order);
  console.log(order);

  const handleUserShopStatus = (e) => {
    e.preventDefault();
    dispatch(updateOrderStatus(id, "cancelled"));
  };
  const sendReview = (e) => {
    e.preventDefault();
    setProductId(e.target.id);
    setProductName(e.target.value);
    setShowReview(true);
  };
  const viewShopping = (e) => {
    e.preventDefault();
    push("/user/compras");
  };
  return (
    <div className="container">
      <h3 className="text-center mt-4">Detalle de la Orden</h3>
      <div className="row mt-4">
        <div className="col-md-4 border rounded">
          <div className="mt-3">
            <h4 className="text-center text-dark">Información de la Orden</h4>
          </div>
          <hr />
          <p className="px-2 text-dark">Orden ID: {order.id}</p>
          <p className="px-2 text-dark">Status: {order.status}</p>
          <p className="px-2 text-dark">Date:</p>
          <p className="px-2 text-dark">{order.delivery_date}</p>
        </div>

        <div className="col-md-4 border rounded">
          <div className="mt-3">
            <h4 className="text-center text-dark">información de envio</h4>{" "}
          </div>

          <hr />
          <p className="px-2 text-dark">Provincia: {order.province}</p>
          <p className="px-2 text-dark">Location: {order.location}</p>
          <p className="px-2 text-dark">Direccion: {order.home_address}</p>
        </div>
        <br />
        <div className="col-md-4 border rounded">
          <div className="mt-3">
            <h4 className="text-center text-dark">Productos comprados</h4>
          </div>
          <hr />
          {order.products && order.products.length > 0
            ? order.products.map((e) => (
                <div className="">
                  <p className="px-2 text-dark">Nombre: {e.title}</p>
                  <p className="px-2 text-dark">
                    Cantidad: {e.Order_Product.quantity}
                  </p>
                  <p className="px-2 text-dark">Precio/Unitario :{e.price}</p>
                  <hr />
                  {order.status === "delivered" ? (
                    <button
                      className="boton-drop-review"
                      id={e.id}
                      value={e.title}
                      onClick={(e) => sendReview(e)}
                    >
                      Dejame tu Review
                    </button>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      </div>
      {showReview && (
        <div>
          <h4>Producto:{productName}</h4>
          <CreateReview match={productId} />
        </div>
      )}
      <hr />
      <div className="row justify-content-center">
        {" "}
        {order &&
        (order.status !== "cancelled" ||
          order.status !== "delivered" ||
          order.status !== "shipped") ? (
          <button id="buttondown" onClick={(e) => handleUserShopStatus(e)}>
            Cancelar mi Compra
          </button>
        ) : null}
        <br />
        <br />
        <button
          style={{ marginLeft: "5px" }}
          id="buttondown"
          onClick={(e) => viewShopping(e)}
        >
          Volver a Compras
        </button>
      </div>
    </div>
  );
}

export default UserOrdenDetail;
