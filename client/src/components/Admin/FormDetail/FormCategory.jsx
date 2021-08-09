import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, deleteCategory, postCategory } from "../../../redux/actions/category/index"


//CREAR RUTA DELETE PARA CATEGORIES
function Form() {

    const dispatch = useDispatch();
    const [category, setCategory] = useState([]);
    const [newCategory, setNewCategory] = useState("");

    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    const categories = useSelector(state => state.categoryReducer.categories);
    console.log("CATEGORIES: ", categories)

    const handleDeleteCategory = async (e, id) => {
        e.preventDefault();
        dispatch(deleteCategory(id))
        //console.log("ID DELETE: ",id)
        setCategory(category.filter((c) => c.id !== id));
    };

    useEffect(() => {
        setCategory(categories);
    }, [categories])


    const handleSendCategory = async (e) => {
        // e.preventDefault();
        if (newCategory.trim().length > 0) {
            await dispatch(postCategory(newCategory))
            await dispatch(getAllCategory())
        }
    }
    const handleInput = async (e) => {
        e.preventDefault();
        setNewCategory(e.target.value)
    }

    return (
        //agujas eliminar-->botton 
        //botton agregar categorias
        <div className="container">
            <h2 className="text-center mt-3">Agregar Categoría</h2>
            <div className="row">
                <div className="col-6">
                    <div className="mb-3">
                        <label className="mt-2" htmlFor="SendCategory">Agrega una categoría</label>
                        <input className="form-control mt-2" type="text" name="SendCategory" onChange={e => handleInput(e)} placeholder="Bastidores.." />
                        <div className="d-flex">
                            <button className="btn btn-warning mt-2" onClick={e => handleSendCategory(e)}>Crear</button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    {categories ? category.length > 0 ? category.map((c) => (
                        
                            <ul className="container mt-3"> 
                                <li>
                                    <span className>
                                        <button className="btn btn-danger" onClick={(e) => handleDeleteCategory(e, c.id)}>Eliminar</button>
                                        <span style={{marginLeft: "20px", textStyle: "bold"}}>{c.name}</span>
                                    </span>
                                </li>
                            </ul>
                        
                    )) : <p className="text-center mt-3" style={{textStyle: "bold"}}>No hay categoría</p> : null}
                </div>
            </div>
        </div>

    )
}

export default Form
