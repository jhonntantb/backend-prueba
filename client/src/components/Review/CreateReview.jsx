import {useDispatch, useSelector} from "react-redux"
import {useState, useEffect} from "react"
import React from "react";
import { createReview } from "../../redux/actions/review/index"

export default function CreateReview ({match}){
    const dispatch = useDispatch();
    const [values,setValues] = React.useState({
        description:"",
        score:1, 
        userId:"USERID", //ACA TENGO QUE ACCEDER AL SESSION STORAGE PARA OBTENER EL USERID
        productId:match
    })
    const[send,setsend] = useState("False");
function handleSubmit(e){
    
        e.preventDefault();
        if(values.description.length < 1)
            alert("La descripcion no puede estar vacio")
        else if(parseInt(values.score) < 1 || parseInt(values.score) > 5 )
            alert("El Valor de score esta fuera del permitido")
        else{
            dispatch(createReview(values))
            setsend("true");}
        }  
  
return ( <div>  
    <h4>Form Review</h4>
    <form onSubmit={handleSubmit}>
       
        <label htmlFor="description">  Description:  </label>
        <textarea  onChange={(e)=> {setValues({...values,description:e.target.value})}}  >   </textarea>

        <label htmlFor="score">Choose a score:</label>
        <select id="score" onChange={(e)=>  {setValues({...values,score:e.target.value})}} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
    
      
        <input type="submit" value="Submit"  />
    </form>
            { (send == "true") && <h1>The form was sent correctly</h1>}
</div>
    )
}