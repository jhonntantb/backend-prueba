import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import React from "react";
import { createReview } from "../../redux/actions/review/index";
import ReviewSeparator from "./ReviewSeparator";

export default function CreateReview({ match }) {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.userReducer.user.id);

  const [values, setValues] = React.useState({
    description: "",
    score: 1,
    userId: id, //ACA TENGO QUE ACCEDER AL SESSION STORAGE PARA OBTENER EL USERID
    productId: match,
  });
  const [send, setsend] = useState("False");
  function handleSubmit(e) {
    e.preventDefault();
    if (values.description.length < 1)
      alert("La descripcion no puede estar vacia");
    else if (parseInt(values.score) < 1 || parseInt(values.score) > 5)
      alert("El Valor de score esta fuera del permitido");
    else {
      console.log(values);
      dispatch(createReview(values));
      setsend("true");
    }
  }

  return (
    <div className="container mt-5">
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group mt-5">
          <label for="email" class="col-sm-2 control-label mt-5">
            <p className="text-dark">Dejanos tu review!</p>
          </label>
          <div className="col-sm-5">
            <textarea
              className="form-control"
              rows="5"
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
            >
              {" "}
            </textarea>
          </div>
          <div className="mt-2">
            <label className="mt-2" htmlFor="score">
              Selecciona una puntuación{" "}
            </label>
            <select
              id="score"
              style={{ marginLeft: "5px" }}
              onChange={(e) => {
                setValues({ ...values, score: e.target.value });
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <input
          style={{ background: "#ee8585" }}
          className="btn text-white mt-3"
          type="submit"
          value="Enviar"
        />
      </form>
      {send == "true" && (
        <div className="modal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Muchas gracias!</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p>Su review se a enviado con exito.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ReviewSeparator />
    </div>
  );
}
