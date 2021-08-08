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
                <a className="navbar-brand" href="/">
                    Merceria
                </a>
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
                        <NavLink activeClassName="text-white" className="nav-link" aria-current="page" to="/">
                            Inicio
                        </NavLink>
                        <NavLink activeClassName="text-white" className="nav-link" to="/productlist">
                            Articulos
                        </NavLink>
                        <NavLink activeClassName="text-white" className="nav-link" to="/productcreation">
                            Agregar productos
                        </NavLink>

                        {authUser==='guest'||!authUser?
                        <NavLink activeClassName="text-white" className="nav-link" to={ROUTES.SIGN_IN}>Ingresar</NavLink>:null}
                        
                        {authUser&&authUser!=='guest'?(
                            <div>
                            <NavLink activeClassName="text-white" className="nav-link" to={ROUTES.ACCOUNT}>My Account</NavLink>
                            </div>
                        ):null}

                       

                    </div>
                    <div className="d-flex">

                    <SearchBar />
                    
                    <SignOutButton />

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
