import React from 'react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct} from "../../redux/actions/product/index.js";




function ProductDetail() {
    
    const dispatch = useDispatch()
    const {idProduct} = useParams()
   // console.log('aqui estoy');
    //console.log("acaaaaaaa estoy")
    //console.log("Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    //console.log(idProduct)
    useEffect(() => {
        dispatch(getProduct(idProduct));
    },[idProduct, dispatch]);

    const producto = useSelector(state => state.product);
    
    //console.log('producto: ',producto);

    if (producto) {
      return (
         <div>
             <h1>Detalle del Producto</h1>
             <p>{producto.title}</p>
             <hr/>
         </div>
      )
    }
    else {
        return (
            <div>
             <h1>Detalle del Producto</h1>
             <p>"no hay datos</p>
             <hr/>
         </div>
        )
    }
}

export default ProductDetail
