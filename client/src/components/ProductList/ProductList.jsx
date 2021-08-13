import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../redux/actions/product/index.js";
import { SetCategoriesFiltradas } from "../../redux/actions/category/index.js";
import { getAllCategory } from "../../redux/actions/category/index.js";
import "./ProductList.css";
import CardProduct from "./CardProduct.jsx";
import { BrowserRouter } from 'react-router-dom';

function ProductList() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.productReducer.products);
  const categorias = useSelector((state) => state.categoryReducer.categories);
  var categoryFiltrada = useSelector(
    (state) => state.categoryReducer.categoryFiltrada
  );

  const [Minimo, setMinimo] = useState("");
  const [Maximo, setMaximo] = useState("");
  const [orden, setOrden] = useState("A-Z");

  useEffect(() => {
    !list.length && dispatch(getAllProduct());
    dispatch(getAllCategory());
  }, []);

  var lista_filtrada = [];
  if (categoryFiltrada != "Todas") {
    list.map((e) =>
      e.categories.map((a) => {
        if (a.name === categoryFiltrada) lista_filtrada.push(e);
      })
    );
  } else lista_filtrada = list;
  console.log(list);
  console.log("CATEGORY" + categoryFiltrada);
  console.log("lISTA_FILTRADA" + lista_filtrada);
  console.log(Minimo);
  console.log(Maximo);

  if (Minimo != "" && Maximo != "") {
    lista_filtrada = lista_filtrada.filter((val) => {
      if (val.price > Minimo && val.price < Maximo) {
        return val;
      }
    });
  }
  if (Minimo != "" && Maximo == "") {
    lista_filtrada = lista_filtrada.filter((val) => {
      if (val.price > Minimo) {
        return val;
      }
    });
  }
  if (Minimo == "" && Maximo != "") {
    lista_filtrada = lista_filtrada.filter((val) => {
      if (val.price < Maximo) {
        return val;
      }
    });
  }
  if (Minimo == "" && Maximo == "" && orden == "A-Z") {
    lista_filtrada.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  if (Minimo == "" && Maximo == "" && orden == "Z-A") {
    lista_filtrada.sort(function (a, b) {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });
  }

  
 
  return (

    <div className="d-table-responsive">
      <div id="tableleft"className="d-table-cell" >
        <div className="justify-content-start mx-5" >
        <label htmlFor="categories">Filtrar por categorias</label>
        <select className="form-select" aria-label=".form-select-lg " id="categories" onChange={(e) => { dispatch(SetCategoriesFiltradas(e.target.value)) }} >
          <option value={categoryFiltrada}>{categoryFiltrada}</option>
          {categoryFiltrada != "Todas" && <option value="Todas">Todas</option>}

          {(categorias && categorias.length > 0) && categorias.map(lista =>
            lista.name != categoryFiltrada &&
            <option value={lista.name}>{lista.name}</option>
          )}
        </select>
        <br />
        <br />
        <label>Precio </label>
        <div className="input-group  mb-3">
        <span class="input-group-text">$</span>
        <input className="form-control"type="text" name="Minimo" id="Minimo" placeholder="Minimo" onChange={(e) => { setMinimo(e.target.value) }} />
        </div>
        <div className="input-group">
        <span class="input-group-text">$</span>
        <input className="form-control" type="text" name="Maximo" id="Maximo" placeholder="Maximo" onChange={(e) => { setMaximo(e.target.value) }} />
        </div>
        <br />
        <br />
        <label htmlFor="categories">Ordenar </label>
        <br />
        <select className="form-select" aria-label=".form-select-lg " id="categories" onChange={(e) => { setOrden(e.target.value) }}>
          <option value="A-Z">"A-Z"</option>
          <option value="Z-A">"Z-A"</option>
        </select>
        </div>
      </div>
      <div className="d-table-cell" >
          {
            lista_filtrada && lista_filtrada.length > 0 ? lista_filtrada.map(e =>
              <span key={e.id} className="card-deck   mx-1" >
                <CardProduct title={e.title} price={e.price} url={e.productimages[0].image_url} id={e.id} />
              </span>
            ) : <h3 className="text-center mt-4">No hay productos</h3>}
      </div>
      <footer>
        
      </footer>
    </div>
  )



}

export default ProductList;
