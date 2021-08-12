import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { getAllProduct } from "../../redux/actions/product/index.js";

import { getProduct } from "../../redux/actions/product/index.js";
import './SearchBar.css'

export default function SearchBar() {

  const [name, setName] = useState("")

  const dispatch = useDispatch();

  const { push } = useHistory()


  const handleInputSearch = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleClickSearch = (e) => {
    e.preventDefault();
    if (name.trim().length > 0) {
      dispatch(getAllProduct(name))
      setName("")
      push("/productlist")
    }
  }

  return (
    <div className="container">
      <div class="row">
      <div class="col-lg-12 col-md-3 col-sm-6">
        <span><input className="form-control" type="text" placeholder="Buscar... " onChange={(e) => handleInputSearch(e)} /></span>
        <span><button class="btn btn-block" onClick={(e) => handleClickSearch(e)}><i class="fa fa-search"></i></button></span>
      </div>
      </div>
    </div>
  )
}