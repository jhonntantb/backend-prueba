import { useSelector } from "react-redux";
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getAllProduct} from "../../redux/actions/product/index.js";


import './Product.css'

function ProductList() {
const dispatch = useDispatch()  

useEffect( () => {
  dispatch(getAllProduct());

}, [])




const list = useSelector(state => state.productReducer.products)

console.log("****************",list);

if (list && list.length > 0) {
 return (
    
  <>    
    <div className={"caja-headers"}>     
         <h2>Listado de Productos</h2>
         <h2>Total de productos: {list.length}</h2>
    </div>   
          
    {list ? (
     <> 
       <ul style={{listStyleType: "none"}}>
        {list.map((r) => 
        <div>
            <li key={r.catalog_id} className={"caja"}>
              <div className={"caja-datos"}>

                {r.productimages.length > 0? <img src={r.productimages[0].image_url} width="350" alt='Imagen no disponible' className={"caja-imagen"}/> : null}
                 <div className={"caja-datosTexto"}>
                   <Link to={`/productdetail/${r.id}`} className={"caja-nombre"}>
                    {r.title} 
                   </Link>
                   <p>{`Artículo: ${r.catalog_id}`}</p>
                   <p>{`Precio: ${r.price}`}</p>
                  {r.categories.length > 0? <p>{`Categoria: ${r.categories[0].name}`}</p> : null}
 
                 </div>
              </div>
            </li>
        </div>  
          )}
        </ul>
        <br/>

    </>

       ) : (
        <div>Cargando...</div>
       )}
 </>
    
 )
} else {
  return (
   <div> 
     <h3>No hay datos</h3> 
  
   </div>
  )
}
}

export default ProductList;