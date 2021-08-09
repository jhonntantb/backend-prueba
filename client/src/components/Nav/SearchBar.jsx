import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { getProduct} from "../../redux/actions/product/index.js";



/*const SearchBar = () => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

    const dispatch = useDispatch() 


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

export default SearchBar*/

export default function SearchBar() {
  const dispatch = useDispatch();
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  const [name,setName] = useState("")

  const handleInputChange = (event) => {
      event.preventDefault();
      setName(event.target.value);
  };
  
  const handleClick= (event) => {
      event.preventDefault();
      dispatch(getProduct(name))
  };

  return (
      <div className="divSearch">
          <input style={BarStyling} className="inputsearch" type="text" placeholder="Buscar... " onChange={(e) => handleInputChange(e)} />
          <button className="buttonsearch" onClick={(e) => handleClick(e)}>Buscar</button>
      </div>
  );
}