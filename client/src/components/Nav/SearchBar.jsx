import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllProduct } from "../../redux/actions/product/index.js";

import { getProduct } from "../../redux/actions/product/index.js";
import "./SearchBar.css";

export default function SearchBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleInputSearch = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleClickSearch = (e) => {
    e.preventDefault();
    if (name.trim().length > 0) {
      dispatch(getAllProduct(name));
      setName("");
      push("/productlist");
    }
  };

  return (
    // <div className="search">
    //   <input
    //     className="form-control"
    //     type="text"
    //     placeholder="Crochets, Bastidores"
    //     onChange={(e) => handleInputSearch(e)}
    //   />
    //   <button className="btn btn-block" onClick={(e) => handleClickSearch(e)}>
    //     Buscar
    //   </button>
    // </div>
    // <div className="search">
    //   " "
    //   <input
    //     type="text"
    //     className="form-control"
    //     placeholder="Have a question? Ask Now"
    //   />
    //   <button className="btn btn-primary">Search</button>
    // </div>

    <div className="search">
      <input
        className="form-control"
        type="text"
        placeholder="Crochets, Bastidores"
        onChange={(e) => handleInputSearch(e)}
      />

      <button className="btn" onClick={(e) => handleClickSearch(e)}>
        Buscar
      </button>
    </div>
  );
}
