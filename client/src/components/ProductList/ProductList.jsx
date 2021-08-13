import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../redux/actions/product/index.js";
import { SetCategoriesFiltradas } from "../../redux/actions/category/index.js";
import { getAllCategory} from "../../redux/actions/category/index.js"
import './ProductList.css'
import CardProduct from "./CardProduct.jsx";





function ProductList() {
  const dispatch = useDispatch()
  
  const list = useSelector(state => state.productReducer.products)
  const categorias = useSelector(state => state.categoryReducer.categories)
  var categoryFiltrada = useSelector((state)=> state.categoryReducer.categoryFiltrada)

  const [Minimo, setMinimo] = useState("");
  const [Maximo, setMaximo] = useState("");
  const [orden,setOrden] = useState("A-Z");

  useEffect(() => {
    !list.length && dispatch(getAllProduct());
    dispatch(getAllCategory())
 }, [])
  

  var lista_filtrada = [];
  if(categoryFiltrada != "Todas")
  {
    list.map(e=>
   
       e.categories.map(a=> {if(a.name === categoryFiltrada) lista_filtrada.push(e) })
      
  )
  
  
  }else lista_filtrada = list
  console.log(list)
  console.log("CATEGORY"+categoryFiltrada)
  console.log("lISTA_FILTRADA"+lista_filtrada)
  console.log(Minimo)
  console.log(Maximo)

  if(Minimo != "" && Maximo != "")
  {
      lista_filtrada = lista_filtrada.filter((val)=>{
       if (val.price > Minimo && val.price < Maximo ){
            return val;
       }
      }
  
    )
      
  }
  if(Minimo != "" && Maximo == "")
  {
      lista_filtrada = lista_filtrada.filter((val)=>{
       if (val.price > Minimo  ){
            return val;
       }
      }
  
    )
      
  }
  if(Minimo == "" && Maximo != "")
  {
      lista_filtrada = lista_filtrada.filter((val)=>{
       if (val.price < Maximo  ){
            return val;
       }
      }
  
    )
      
  }
  if(Minimo == "" && Maximo == "" && orden == "A-Z")
  {
    lista_filtrada.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
  })
      
  }

  if(Minimo == "" && Maximo == "" && orden == "Z-A")
  {
    lista_filtrada.sort(function(a, b){
      if(a.title > b.title) { return -1; }
      if(a.title < b.title) { return 1; }
      return 0;
  })
      
  }

  return (
    <div id="cards" className="card" >

      <label htmlFor="categories">Filter By Categories:</label>
        <select id="categories" onChange={(e)=> { dispatch(SetCategoriesFiltradas(e.target.value))}} >
          <option value={categoryFiltrada}>{categoryFiltrada}</option>
          {categoryFiltrada!= "Todas"&& <option value="Todas">Todas</option>}
      
            {(categorias && categorias.length>0) && categorias.map(lista => 
                lista.name != categoryFiltrada &&  
                <option value={lista.name}>{lista.name}</option> 
          )}
           
        </select>
      <label>Precio $</label>
      <input type="text" name="Minimo" id="Minimo" placeholder="Minimo"onChange={(e)=> {setMinimo(e.target.value) } }/>
      <input type="text" name="Maximo" id="Maximo" placeholder="Maximo"onChange={(e)=> {setMaximo(e.target.value) } }/>
      <label htmlFor="categories">Orden Alfabetico:</label>
        <select id="categories" onChange={(e)=> {setOrden(e.target.value) } }>
          <option value="A-Z">"A-Z"</option>
          <option value="Z-A">"Z-A"</option>           
        </select>
      {
        lista_filtrada&&lista_filtrada.length>0?lista_filtrada.map(e=>
            <div key={e.id} className="list">
              <CardProduct title={e.title} price={e.price} url={e.productimages[0].image_url} id={e.id} /> 
            </div>
        ):<h3 className="text-center mt-4">No hay productos</h3>}
        </div>
  )

  
  
}

export default ProductList;