import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  deleteCategory,
  postCategory,
} from "../../../redux/actions/category/index";
import "./ButtonForm.css";

//CREAR RUTA DELETE PARA CATEGORIES
function Form() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const categories = useSelector((state) => state.categories);
  console.log("CATEGORIES: ", categories);

  useEffect(() => {
    setCategory(categories);
  }, [categories]);

  const handleDeleteCategory = async (e, id) => {
    e.preventDefault();
    dispatch(deleteCategory(id));
    setCategory(categories.filter((c) => c.id !== id));
  };

  const handleSendCategory = async (e) => {
    e.preventDefault();
    dispatch(postCategory(newCategory));
    setCategory(category.concat[newCategory]);
  };
  const handleInput = async (e) => {
    e.preventDefault();
    setNewCategory(e.target.value);
  };

  return (
    //agujas eliminar-->botton
    //botton agregar categorias
    <div>
      <div>
        {category.length > 0 ? (
          category.map((c) => (
            <span className="">
              <button
                className="x"
                onClick={(e) => handleDeleteCategory(e, c.id)}
              >
                Eliminar
              </button>
              <span>{c.name}</span>
            </span>
          ))
        ) : (
          <span>[""]</span>
        )}
      </div>
      <div>
        <label htmlFor="SendCategory">Agregar categoria</label>
        <input
          type="text"
          name="SendCategory"
          onChange={(e) => handleInput(e)}
          placeholder="categoria"
        />
        <button id="buttonform" onClick={(e) => handleSendCategory(e)}>
          Crear
        </button>
      </div>
    </div>
  );
}

export default Form;
