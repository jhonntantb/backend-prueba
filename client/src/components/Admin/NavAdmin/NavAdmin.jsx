import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllOrder } from "../../../redux/actions/order/index";
import { getAllOffice } from "../../../redux/actions/office";
import { getAllProduct } from "../../../redux/actions/product";
import * as ROUTES from "../../../routes";

function NavAdmin() {
  const dispatch = useDispatch();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-text">Tareas</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav  pt-4,5 mb-lg-0">
            <h3 className="mx-3">/</h3>
            <li class="nav-item">
              <NavLink
                activeClassName="text-dark"
                className="dropdown-item"
                to="/admin/stock"
                onClick={(e) => {
                  dispatch(getAllOffice);
                  dispatch(getAllProduct);
                }}
              >
                stocks
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                activeClassName="text-dark"
                className="dropdown-item"
                to="/admin/orders"
                onClick={(e) => dispatch(getAllOrder())}
              >
                Ordenes
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                activeClassName="text-dark"
                className="dropdown-item"
                to="#"
              >
                Review
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="text-dark"
                className="dropdown-item"
                to={ROUTES.FORM}
              >
                {" "}
                Agregar Categoria{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="text-dark"
                className="dropdown-item"
                to={ROUTES.PRODUCT_CREATION}
              >
                {" "}
                Agregar Producto{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="text-dark"
                className="dropdown-item"
                to={ROUTES.MANAGE_USERS}
              >
                {" "}
                Administrar Usuarios{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavAdmin;
