import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import { getProduct } from "../../redux/actions/product/index.js";
import './SearchBar.css'

import { useHistory} from "react-router-dom"
import { getAllProduct } from "../../redux/actions/product/index.js";



export default function SearchBar() {

  const dispatch = useDispatch();
  const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
  const [name, setName] = useState("")

  const handleInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getProduct(name))
  };

  return (
    <div className="divSearch">
      {/* <input style={BarStyling} className="inputsearch" type="text" placeholder="Buscar... " onChange={(e) => handleInputChange(e)} /> */}
      {/* <button className="buttonsearch" onClick={(e) => handleClick(e)}><i class="fa fa-search"></i></button> */}
      <div className="search">
        {" "}
        <i class="fa fa-search" />{" "}
        <input
          type="text"
          className="form-control"
          placeholder="Crochets, Bastidores"
        />
        <button className="btn">Buscar</button>

  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  const dispatch = useDispatch();
  const {push} =useHistory()
  
  const [name,setName] = useState("")

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
          <input style={BarStyling} className="inputsearch" type="text" placeholder="Buscar... " value={name} onChange={(e)=>handleInputSearch(e)} />
          <button style={{padding:"0.5rem",margin:"5px"}} className="buttonsearch" onClick={(e)=>handleClickSearch(e)}>Buscar</button>
      </div>

    </div>
  );
}