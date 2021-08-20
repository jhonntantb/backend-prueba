import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import "./Navbar.css";

import SignOutButton from '../Authentication/SignOut/index';
import * as ROUTES from '../../routes';
import { getAllProduct } from '../../redux/actions/product';
import {ShowCartCant} from './ShowCartCant';
import CheckUser from '../Authentication/CheckUser/CheckUser';
import { getAllOrder } from '../../redux/actions/order';
import { useHistory } from 'react-router';

const Navbar = () => {

  // const [authUser, setAuthUser] = useState(localStorage.getItem("pg_merceria"))
  // const [admin, setAdmin] = useState(localStorage.getItem("admin"))
  // CheckUser();
  const history = useHistory()
  const dispatch = useDispatch();
  const authUser= localStorage.getItem("pg_merceria")
  const admin = localStorage.getItem("admin")
  
  
//  useEffect(()=>{
//   if(authUser==='guest') history.push('/')
  
//   },[authUser])

  
  //var cart = localStorage.getItem("cart") != undefined ? (JSON.parse(localStorage.getItem("cart"))) : [];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={authUser === 'guest' ? "/" : '/'}>
          <img width="150rem" style=
            {{
              borderRadius: '50px',
              backgroundPosition: 'center'
            }} src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.18169-9/10923273_406735952831411_3065322763382978546_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=mPv01XSVFSgAX9-cxzs&tn=s9y3TrQbg6IVf8rV&_nc_ht=scontent.ftuc1-1.fna&oh=5435ad22048225e9211a64eff661f9e7&oe=61377CD8" alt="logotipo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <form className="d-flex ml-10 ">
          <SearchBar />
        </form>
        {authUser !== 'guest' ?
        <li className="nav-item active mx-3">
              <NavLink activeClassName="text-white" className="nav-link" to="/wishlist"  >
                Wishlist
              </NavLink>
            </li>:null}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <ul className="navbar-nav ml-10  ">
           <li className="nav-item mx-3">
              <NavLink activeClassName="text-white" className="nav-link" to="/contactus" onClick={() => dispatch(getAllProduct())} >
                Contactanos
              </NavLink>
            </li>
         {/* <li className="nav-item mx-3">
              <NavLink activeClassName="text-white" className="nav-link" to="/productlist" onClick={() => dispatch(getAllProduct())} >
                Acerca de Nosotros
              </NavLink>
            </li> */}
            <li className="nav-item active mx-3">
              <NavLink activeClassName="text-white" className="nav-link" to="/productlist" onClick={() => dispatch(getAllProduct())} >
                Productos
              </NavLink>
            </li>
          <ul className="navbar-nav mx-3">
              {authUser && admin!="null" ? (
                <li className="nav-item">  <NavLink activeClassName="text-white" className="nav-link" to={"/admin"}>Admin</NavLink></li>
              ) : null}
            </ul>
          {authUser === 'guest' ?
            <li className="nav-item mx-3"><NavLink activeClassName="text-white" className="nav-link" to={ROUTES.SIGN_IN}>Ingresar</NavLink></li> :
            <li className="nav-item dropdown mx-3">
              <NavLink class="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true" to="#">Mi Cuenta</NavLink>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink class="dropdown-item" to={ROUTES.ACCOUNT}>Seguridad</NavLink></li>
                {/* <li><a class="dropdown-item" href="#">Mis Datos</a></li> */}
                <li> <NavLink class="dropdown-item" to="/user/compras" onClick={e=>dispatch(getAllOrder(localStorage.getItem('pg_merceria')))}>Compras</NavLink> </li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href='/'><SignOutButton /></a></li>
              </ul>
            </li>}
            <ul className="navbar-nav mx-3">
              <li className="nav-item">
                <NavLink to={ROUTES.CART}>
                  <button id="buttoncart" className="btn btn-block btn-black rm-border" >
                    <i style={{fontSize: "25px"}} id="iconcart" class="fa fa-shopping-cart black"> </i>
                    <span style={{fontSize: "18px"}} class="badge bg ">{ShowCartCant()} </span>
                  </button>
                </NavLink>
              </li>
            </ul> 
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
