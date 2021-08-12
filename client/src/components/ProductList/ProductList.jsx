import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
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