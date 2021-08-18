import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import React from "react";
import { createReview } from "../../redux/actions/review/index";
import ReviewSeparator from "./ReviewSeparator";
import Swal from "sweetalert2";

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
    const mostrarAlerta = () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El campo no puede quedar vacio!",
      });
    };
    e.preventDefault();
    if (values.description.length < 1) mostrarAlerta();
    else if (parseInt(values.score) < 1 || parseInt(values.score) > 5)
      alert("El Valor de score esta fuera del permitido");
    else {
      console.log(values);
      dispatch(createReview(values));
      setsend("true");
    }
  }

  const alertSucces = () => {
    Swal.fire({
      icon: "success",
      title: "Muchas gracias",
      text: "Tu review se a enviado correctamente!",
      showConfirmButton: false,
      timer: 1400,
    });
  };

  return (
    <div className="container mt-5">
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group mt-5">
          <label for="email" class="col-sm-3 control-label mt-5">
            <h3 className="text-dark">Dejanos tu review!</h3>
          </label>
          <div className="col-sm-5">
            <textarea
              className="form-control"
              rows="6"
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
      {send == "true" && alertSucces()}

      <ReviewSeparator />
    </div>
  );
}
