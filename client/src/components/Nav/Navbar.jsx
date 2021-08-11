import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'


import SignOutButton from '../Authentication/SignOut/index';
import * as ROUTES from '../../routes';
import { getAllProduct } from '../../redux/actions/product';

const Navbar = () => {
  const dispatch = useDispatch();
  var authUser = sessionStorage.getItem("pg_merceria")


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img width="150rem" style=
          {{borderRadius: '50px',
            backgroundPosition: 'center'}} src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.18169-9/10923273_406735952831411_3065322763382978546_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=mPv01XSVFSgAX9-cxzs&tn=s9y3TrQbg6IVf8rV&_nc_ht=scontent.ftuc1-1.fna&oh=5435ad22048225e9211a64eff661f9e7&oe=61377CD8" alt="logotipo" />
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
            <NavLink activeClassName="text-white" className="nav-link" to="/productlist" onClick={() => dispatch(getAllProduct())} >
              Articulos
            </NavLink>

            {authUser === 'guest' || !authUser ?
              <NavLink activeClassName="text-white" className="nav-link" to={ROUTES.SIGN_IN}>Ingresar</NavLink> :
              <NavLink activeClassName="text-white" className="nav-link" to={ROUTES.ACCOUNT}>Mi Cuenta</NavLink>}
            {authUser && authUser !== 'guest' ? <SignOutButton/>  : null  }
          </div>
          <div>
            
            <div className="d-flex">




              {authUser && authUser !== 'guest' ? (
                // <div>
                // <NavLink activeClassName="text-white" className="nav-link" to={ROUTES.ACCOUNT}>My Account</NavLink>

                // </div> 

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Admin
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <div>
                        <NavLink activeClassName="text-dark" className="dropdown-item" to={ROUTES.FORM}>
                          Agregar Categoria
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div>
                        <NavLink activeClassName="text-dark" className="dropdown-item" to='/productcreation'>
                          Agregar Producto
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                </li>

              )


                : null}

            </div>
          </div>
            <SearchBar />
         
        </div>
      </div>
    </nav>
  )
}

export default Navbar
