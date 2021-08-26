import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/product";
import Carrousel from "../../components/Carrousel/Carrousel";
import CardProduct from "../../components/ProductList/CardProduct";
import Footer from "./../../components/Footer/Footer";
import "./Landing.css";

import Scroll from "../../components/Scroll/Scroll";
import { NavLink } from "react-router-dom";


import { SetCategoriesFiltradas } from "../../redux/actions/category/index.js";
 




export const Landing = () => {
 

  const dispatch = useDispatch();

  const list = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  let list4 = [];

  list4.push(list[0], list[1], list[2]);

  return (
    <div  style={{marginTop:"1%"}}>
    <section className=" welcome_area bg-img background-overlay" >
     <div className="container h-100">
       <div className="row h-100 align-items-center">
         <div className="col-12">
           <div className="hero-content text-center">
            <h2 >Nueva Colección</h2>
           <NavLink className="btn essence-btn" to="/productlist"> Comprar ahora</NavLink>
           </div>
         </div>
       </div>
     </div>
    </section>
    <div class="top_catagory_area section-padding-80 clearfix">
     <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4">
         <div id="img1" className="single_catagory_area d-flex align-items-center justify-content-center bg-img" >
          <div className="catagory-content">
          <NavLink to="/productlist"onClick={ ()=>{dispatch(SetCategoriesFiltradas("Bastidores"))}}>Bastidores</NavLink>
          </div>
         </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
         <div id="img2" className="single_catagory_area d-flex align-items-center justify-content-center bg-img"  >
          <div className="catagory-content">
          <NavLink to="/productlist"onClick={ ()=>{dispatch(SetCategoriesFiltradas("Agujas"))}}>Agujas</NavLink>
          </div>
         </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
         <div id="img3" className="single_catagory_area d-flex align-items-center justify-content-center bg-img"  >
          <div className="catagory-content">
          <NavLink to="/productlist"onClick={ ()=>{dispatch(SetCategoriesFiltradas("Tijeras de Sastre"))}}>Tijeras</NavLink>
          </div>
         </div>
        </div>
      </div>
     </div>
    </div>
     <section className="new_arrivals_area section-padding-80 clearfix">
      <div className="container">
       <div className="row">
        <div className="col-12">
         <div className="section-heading text-center">
          <h2>Productos Populares</h2>
         </div>
        </div>
       </div>
      </div>
      <div className="container">
       <div className="row">
          <div className="col-12">
          {list.length > 2 &&
              list4.map((c) => (
                <CardProduct
                  key={c.id} 
                  id={c.id}
                  url={c.productimages[0].image_url}
                  price={c.price}
                  title={c.title}/>
              ))}   
          </div>
       </div>
      </div>
      <Scroll />
     </section>
    <Footer />
  </div>
  );
};

export default Landing;