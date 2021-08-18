import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/actions/category";
import { createProduct, getAllProduct } from "../../redux/actions/product";
import { getAllOffice } from "../../redux/actions/office";
import ReactFirebaseFileUpload from "../../components/FileUploader/FileUploader";
import * as ROUTES from "../../routes";
import "./ProductCreation.css";
import NotFound from "../NotFound/NotFound";

const ProductCreation = (props) => {

  const admin = localStorage.getItem("admin")

  const dispatch = useDispatch();

  const storeCategories = useSelector(
    (state) => state.categoryReducer.categories
  );
  const storeOffices = useSelector((state) => state.officeReducer.offices);

  const [inputCategories, setInputCategories] = useState([]);
  const [inputOffice, setInputOffice] = useState([]);
  const [storeImages, setStoreImages] = useState([]);

  const local_initial_state = {
    title: "",
    resume: "",
    detail: "",
    price: "",
    catalog_id: null,
    image: [],
    category: [],
    quantity: 0,
    office: "",
  };

  const [addProduct, setaddProduct] = useState(local_initial_state);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      addProduct.title != "" &&
      addProduct.resume !== "" &&
      addProduct.detail !== "" &&
      addProduct.price !== "" &&
      addProduct.catalog_id !== null &&
      addProduct.image.length > 0 &&
      addProduct.quantity > 0 &&
      addProduct.office !== ""
    ) {
      dispatch(createProduct(addProduct));
      dispatch(getAllProduct());
      props.history.push("/productlist");
    } else {
      throw alert("TODOS LOS CAMPOS SON OBLIGATORIOS");
    }
  };

  const handleChange = (e) => {
    setaddProduct({
      ...addProduct,
      [e.target.name]: e.target.value,
    });
  };

  function selectCategory(e) {
    var categorySelected = e.target.value;
    var aux = [categorySelected];

    if (!e.target.checked) {
      let filtered = inputCategories.filter((e) => e != categorySelected);
      setInputCategories(filtered);
    } else {
      setInputCategories(inputCategories.concat(aux));
    }
  }

  function renderCategories() {
    return (
      <div>
        {" "}
        Categorias
        {storeCategories.map((c, i) => {
          return (
            <div>
              <input
                type="checkbox"
                id={i}
                name={c.name}
                value={c.id}
                onChange={(e) => selectCategory(e)}
              />
              <label for={i}>{c.name}</label>
              <br />
            </div>
          );
        })}
      </div>
    );
  }

  function selectOffice(e) {
    var officeSelected = e.target.value;
    setInputOffice(officeSelected);
  }

  function renderOffices() {
    console.log("store offices tiene : ", Object.keys(storeOffices));
    return (
      <div>
        {" "}
        Sucursal
        {
          <select onChange={(e) => selectOffice(e)}>
            {storeOffices.map((o, i) => (
              <option value={o.id}>{o.name}</option>
            ))}
          </select>
        }
      </div>
    );
  }
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllOffice());
  }, []);

  useEffect(() => {
    setaddProduct({ ...addProduct, image: storeImages });
  }, [storeImages]);

  useEffect(() => {
    setaddProduct({ ...addProduct, category: inputCategories });
  }, [inputCategories]);

  useEffect(() => {
    setaddProduct({ ...addProduct, office: inputOffice });
  }, [inputOffice]);

  useEffect(() => {
    if (storeOffices.length > 0) setInputOffice(storeOffices[0].id);
  }, [storeOffices]);

  // onSubmit={(e)=>handleSubmit(e)}
  return admin!=='null'?(
    <div className="container">
      {/* <nav className="navbar justify-content-start mx-3" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href={ROUTES.ADMIN}>Admin</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Stock</li>
                </ol>
            </nav> */}
      <h1 className="text-center mt-3">Creación de productos</h1>
      <form>
        <p>Order: 123</p>
        <div className="mb-3">
          <label className="form-label">Nombre del Producto</label>
          <input
            name="title"
            value={addProduct.title}
            onChange={handleChange}
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Características del Producto</label>
          <input
            name="resume"
            value={addProduct.resume}
            onChange={handleChange}
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div className="form-floating">
          <textarea
            name="detail"
            className="form-control"
            value={addProduct.detail}
            onChange={handleChange}
            id="floatingTextarea"
            autoComplete="off"
          />
          <label htmlFor="floatingTextarea">Detalle</label>
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            name="price"
            min="0"
            value={addProduct.price}
            onChange={handleChange}
            className="form-control"
            placeholder="$"
            autoComplete="off"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">numero de catalogo</label>
          <input
            type="number"
            min="0"
            name="catalog_id"
            value={addProduct.catalog_id}
            onChange={handleChange}
            className="form-control"
            placeholder="1000"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">cantidad</label>
          <input
            type="number"
            name="quantity"
            min="0"
            value={addProduct.quantity}
            onChange={handleChange}
            className="form-control"
            placeholder="stock"
            autoComplete="off"
          />
        </div>
        {renderOffices()}
        {renderCategories()}
        <ReactFirebaseFileUpload
          storeImages={storeImages}
          setStoreImages={setStoreImages}
        />
        {storeImages.length > 0
          ? storeImages.forEach((url) => {
              return <p>{url}</p>;
            })
          : null}
        <button
          disabled={storeImages.length > 0 ? false : true}
          id="buttonproduct"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Crear Producto
        </button>
      </form>
    </div>
  ):<NotFound/>;
};

export default ProductCreation;
