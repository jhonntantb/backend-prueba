import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'




const Navbar = () => {
    const [keyword, setKeyword] = useState('');
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
                        <SearchBar keyword={keyword} setKeyword={setKeyword}/>

                    </div>
                    <div className="d-flex">
                        <button className="btn btn-danger">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
