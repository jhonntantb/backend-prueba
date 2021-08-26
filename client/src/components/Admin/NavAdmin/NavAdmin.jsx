import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllOrder } from "../../../redux/actions/order/index";
import { getAllOffice } from "../../../redux/actions/office";
import { getAllProduct } from "../../../redux/actions/product";
import * as ROUTES from "../../../routes";
import NotFound from "../../../views/NotFound/NotFound";
import "./NavAdmin.css";

function NavAdmin() {
  const dispatch = useDispatch();

  const admin = localStorage.getItem("admin");

  return admin !== "null" ? (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" style={{ marginTop: "10%" }}>
        <span className="navbar-text">Tareas</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  pt-4,5 mb-lg-0">
            <h3 className="mx-3">/</h3>
            <li className="nav-item">
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
            {/* <li class="nav-item">
              <NavLink
                activeClassName="text-dark"
                className="dropdown-item"
                to="#"
              >
                Review
              </NavLink>
            </li> */}
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
            <li className="nav-item">
              <NavLink
                activeClassName="text-dark"
                className="dropdown-item"
                to="/admin/offices"
              >
                {" "}
                Officina{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <NotFound />
  );
}

export default NavAdmin;
