import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useHistory} from "react-router-dom"
import { getAllProduct } from "../../redux/actions/product/index.js";

import { getProduct } from "../../redux/actions/product/index.js";
import './SearchBar.css'

export default function SearchBar() {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  

  
  const [name,setName] = useState("")
  
  const dispatch = useDispatch();
  const {push} =useHistory()
  


  const handleInputSearch=(e)=>{
    e.preventDefault()
    setName(e.target.value)
}
const handleClickSearch= (e)=>{
    e.preventDefault();
    if(name.trim().length>0){
        dispatch(getAllProduct(name))
        setName("")
        push("/productlist")

    }
}

  return (
    <div className="divSearch">
       <input style={BarStyling} className="form-control" type="text" placeholder="Buscar... " onChange={(e) => handleInputSearch(e)} /> 
       <button  onClick={(e) => handleClickSearch(e)}><i class="fa fa-search"></i></button>
    {/*  <div className="search">
        {" "}
        <i class="fa fa-search" />{" "}
        <input
          type="text"
          className="form-control"
          placeholder="Crochets, Bastidores"
        />
        <button className="btn">Buscar</button>
      </div>*/}
    </div>
  )
}