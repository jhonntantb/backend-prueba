import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getAllProduct, getProductCategory } from "../../redux/actions/product/index.js";
import { getAllCategory} from "../../redux/actions/category/index.js"
import './ProductList.css'
import CardProduct from "./CardProduct.jsx";




function ProductList() {
  const dispatch = useDispatch()
  const [category,setCategory]=useState("")
  useEffect(() => {
    dispatch(getAllCategory())
  }, [])
  
  const list = useSelector(state => state.productReducer.products)
  const categories=useSelector(state =>state.categoryReducer.categories)

  
  useEffect(() => {
    !list.length && dispatch(getAllProduct());
 }, [])
  
 useEffect(() => {
    dispatch(getProductCategory(category))
 }, [category])
  //comenzamos el filtrado 

  const handleCategory=(e,id)=>{
    dispatch(getAllProduct())
    e.preventDefault()
    setCategory(id)
  }
  return (
    <div className="cards" >
      <div>
        {categories&&categories.length>0?categories.map(e=>
        <button on onClick={event=>handleCategory(event,e.id)}>
          {e.name}
          </button>):null}
      </div>
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