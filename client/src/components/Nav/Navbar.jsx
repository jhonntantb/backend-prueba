import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import SignOutButton from '../Authentication/SignOut/index';
import * as ROUTES from '../../routes';

const Navbar = () => {

    var authUser = sessionStorage.getItem("pg_merceria")


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={ROUTES.LANDING}>
                    Merceria
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink activeClassName="text-white" className="nav-link" aria-current="page" to={ROUTES.HOME}>
                            Inicio
                        </NavLink>
                        <SearchBar />
                        <NavLink activeClassName="text-white" className="nav-link" to="/productlist">
                            Productos
                        </NavLink>
                        <NavLink activeClassName="text-white" className="nav-link" to="/productcreation">
                            Agregar productos
                        </NavLink>

                    </div>
                    <div className="d-flex">
                        <NavLink to={ROUTES.SIGN_IN}>
                            <button className="btn btn-info">Sing In</button>
                        </NavLink>
                        <NavLink to="/">
                            <button className="btn btn-info">Logout</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
