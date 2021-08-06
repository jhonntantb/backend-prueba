import React from 'react'
import { useDispatch } from "react-redux";
import { getAllProduct} from "../../redux/actions/product/index.js";


const SearchBar = ({keyword,setKeyword}) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

    const dispatch = useDispatch() 

    function handleSubmit(event) {
      event.preventDefault();
      dispatch(getAllProduct(keyword));
      setKeyword('');
    }
    return (
      <input 
       style={BarStyling}
       key="random1"
       value={keyword}
       placeholder={"Agujas.."}
       onChange={(e) => setKeyword(e.target.value)}
       autoComplete="off"
      />
    );
  }

export default SearchBar