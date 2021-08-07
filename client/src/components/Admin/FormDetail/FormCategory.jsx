import React, {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {getAllCategory,deleteCategory,postCategory} from "../../../redux/actions/category/index"


//CREAR RUTA DELETE PARA CATEGORIES
function Form() {

    const dispatch=useDispatch();
    const [category,setCategory]= useState([]);
    const [newCategory,setNewCategory]=useState("");

    useEffect(() => {
       dispatch(getAllCategory())
    }, [])
    
    const categories = useSelector(state => state.categoryReducer.categories);
    console.log("CATEGORIES: ",categories)

    const handleDeleteCategory = async  (e, id) => {
        e.preventDefault();
        dispatch(deleteCategory(id))
        //console.log("ID DELETE: ",id)
        setCategory(category.filter((c) => c.id !== id));
    };
    
    useEffect(() => {
        setCategory(categories);
    }, [categories])
   

    const handleSendCategory = async (e) => {
        e.preventDefault();
        if(newCategory.trim().length > 0){
        dispatch(postCategory(newCategory))
        dispatch(getAllCategory())}
    }
    const handleInput= async (e) => {
        e.preventDefault();
        setNewCategory(e.target.value)
    }
    
    return (
        //agujas eliminar-->botton 
        //botton agregar categorias
        <div>
            <div>
            {category.length > 0 ? category.map((c) => (
                <span className="" >
                    <button className="x" onClick={(e) => handleDeleteCategory(e,c.id)}>Eliminar</button>
                    <span>{c.name}</span>  
                </span>
            )): <p>No hay categorias</p>}
            </div>
            <div>
                <label htmlFor="SendCategory">Agregar categoria</label>
                <input type="text" name="SendCategory" onChange={e=>handleInput(e)} placeholder="categoria"/>
                <button onClick={e=>handleSendCategory(e)}>Crear</button>
            </div>
        </div>

    )
}

export default Form
