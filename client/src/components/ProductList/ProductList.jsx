import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../redux/actions/product/index.js";
import './ProductList.css'
import CardProduct from "./CardProduct.jsx";




function ProductList() {
  const dispatch = useDispatch()

  
  const list = useSelector(state => state.productReducer.products)
  useEffect(() => {
    !list.length && dispatch(getAllProduct());
 }, [])
  
  return (
    <div className="cards" >
      {
        list&&list.length>0?list.map(e=>
            <div key={e.id} className="list">
              <CardProduct title={e.title} price={e.price} url={e.productimages[0].image_url} id={e.id} /> 
            </div>
        ):<p>No hay productos</p>}
    </div>
  )


  
}

export default ProductList;