import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllProduct } from "../../redux/actions/product/index.js";
import "./SearchAC.css";

const Auto = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    const dispatch = useDispatch();
    const { push } = useHistory() ;
    const products = useSelector((state) => state.productReducer.products);

    useEffect(() => {
        const list = [];
        dispatch(getAllProduct('','alfa'));
        products.map(e => list.push({title: e.title + " (" + e.catalog_id + ")", id: e.id}))
        setOptions(list);
        console.log('Options: ',options);
      },[]);

      useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
              document.removeEventListener("mousedown", handleClickOutside);
          }
      },[]);

      const handleClickOutside = event => {
          const {current: wrap} = wrapperRef;
          if (wrap && !wrap.contains(event.target)) {
              setDisplay(false);
              setSearch("");

          }
      }


      const setTexto = (texto, id) => {
          setSearch(texto);
          setDisplay(false);
          console.log('Eligio texto: ' ,texto);
          push(`/product/${id}`);
          

      }
    
    return (
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
          <input 
            id="auto" 
            onClick={() => setDisplay(!display)} 
            placeholder="Escriba para buscar"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />
          {display && (
              <div className="autoContainer">
                  {options.filter(({title}) => title.toLowerCase().includes(search.toLowerCase()) )
                  .map((v,i) => {
                      return (
                        <div 
                          onClick={() => setTexto(v.title, v.id)} 
                          className="option" 
                          key={i}
                          tabIndex="0"
                        >
                           <span>{v.title}</span>
                          
                        </div>
                      );
                  })}
              </div>  
          )}

        </div>
    );

}

function SearchAutoComplete() {
    return (
        <div className="SearchAutoComplete">
            <h1>Autocomplete de Productos</h1>
            <div className="auto-container">   
              <Auto />
            </div>
        </div>
    );
};

export default SearchAutoComplete;

//  {options.filter(({title}) => title.indexOf(search.toLowerCase()) > -1 )

// //props.history.push(`/product/${addProduct.catalog_id}`);
