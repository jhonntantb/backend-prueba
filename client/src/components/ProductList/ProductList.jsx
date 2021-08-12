import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
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
    <div id="cards" className="card" >
      {
        list&&list.length>0?list.map(e=>
            <div key={e.id} className="list">
              <CardProduct title={e.title} price={e.price} url={e.productimages[0].image_url} id={e.id} /> 
            </div>
        ):<h3 className="text-center mt-4">No hay productos</h3>}
    </div>
  )


  
}

export default ProductList;