import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllProduct } from "../../redux/actions/product/index.js";
import { getSomeProduct } from "../../redux/actions/product/index.js";
import { SetCategoriesFiltradas } from "../../redux/actions/category/index.js";
import "./SearchBar.css";
import "./SearchAC.css";

export default function SearchBar() {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const [filtrada, setFiltrada] = useState([]);
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const { push } = useHistory();

  const history = useHistory();

  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    // const list = [];
    dispatch(getAllProduct("", "alfa"));
    //dispatch(getAllProduct()).then(() => {
    console.log("Use effect inicio Productos: ", products);
    // products.map(e => list.push({title: e.title + " (" + e.catalog_id + ")", id: e.id}))
    // console.log('Lista: ', list)
    // setOptions(list);
    // setFiltrada(list);
    // })

    //console.log('Options: ',options);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /*   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      }
  },[]); */

  useEffect(() => {
    const list = [];
    console.log("Segundo effect cambio Productos: ", products);
    products.map((e) =>
      list.push({ title: e.title + " (" + e.catalog_id + ")", id: e.id })
    );
    setOptions(list);
    setFiltrada(list);
  }, [products]);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
      setSearch("");
    }
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length > 3) setDisplay(true);

    var tempFiltrada = options.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltrada(tempFiltrada);
  };

  const handleClickSearch = () => {
    console.log("Filtrada: ", filtrada);
    dispatch(getSomeProduct(filtrada));
    dispatch(SetCategoriesFiltradas("Todas"))
    setDisplay(false);
    setSearch("");
    push("/productlist");
    //alert('aprete boton de buscar');
  };

  const setTexto = (texto, id) => {
    setSearch(texto);
    setDisplay(false);
    push(`/product/${id}`);
  };

  const handleSetDisplay = () => {
    if (search.length > 4) {
      setDisplay(!display);
    }
    dispatch(getAllProduct("", "alfa"));
  };

  useEffect(() => {
    if (search.length < 1) {
      setDisplay(false);
    }
  }, [search]);

  return (
    <div ref={wrapperRef} className="search flex-container flex-column pos-rel">
      <input
        className="form-control"
        type="text"
        placeholder="Ingrese su busqueda..."
        id="autox"
        onClick={() => handleSetDisplay()}
        autocomplete="off"
        value={search}
        onChange={(e) => handleChange(e)}
      />

      <button
        className="btn btn-block btn-black rm-border"
        onClick={() => handleClickSearch()}
      >
        Buscar
      </button>

      {display && filtrada.length > 3 && (
        <div className="autoContainer">
          {filtrada.map((v, i) => {
            return (
              <li
                onClick={() => setTexto(v.title, v.id)}
                className="option"
                key={i}
                tabIndex="0"
              >
                <span className="darle-hover">{v.title}</span>
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
}
