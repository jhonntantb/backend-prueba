import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllOrder } from "../../../redux/actions/order/index"
import { getAllOffice } from '../../../redux/actions/office'
import { getAllProduct } from '../../../redux/actions/product'
import * as ROUTES from "../../../routes"

function NavAdmin() {
    const dispatch = useDispatch()
    return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <span class="navbar-text" >Tareas</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav  pt-4,5 mb-lg-0">
        <li class="nav-item">
         <NavLink activeClassName="text-dark" className="dropdown-item"  to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><NavLink to="/admin/stock" onClick={e=>{dispatch(getAllOffice);dispatch(getAllProduct)}} >stocks</NavLink></a>
        </li>
        <li class="nav-item">
          <NavLink activeClassName="text-dark" className="dropdown-item"  to="/admin/orders" onClick={e=>dispatch(getAllOrder())} >Ordenes</NavLink>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Review</a>
        </li>
        <li className="nav-item">
        <NavLink activeClassName="text-dark" className="dropdown-item" to={ROUTES.FORM}> Agregar Categoria </NavLink> 
        </li>
        <li className="nav-item">
        <NavLink activeClassName="text-dark" className="dropdown-item" to="/productcreation"> Agregar Producto </NavLink> 
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavAdmin
