import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory, postCategory } from '../../redux/actions/category';
import ReactFirebaseFileUpload from '../../components/FileUploader/FileUploader';

const ProductCreation = () => {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getAllCategory())
    },[])

    const storeCategories = useSelector(state=>state.categoryReducer.categories)
    console.log('storeCategories ' , storeCategories)

    const [inputCategories, setInputCategories] = useState([]);
    const [images, setImages] = useState([]);

    const [addProduct, setaddProduct] = useState(
        {
            title: '',
            resume: '',
            detail: '',
            price: '',
            catalog_id: null,
            image: [],
            category: []
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        //// hacer dispatch para que haga el post
        setaddProduct({...addProduct, image: images})
        try {
            dispatch(postCategory(addProduct))
            alert('agregado exitosamente')
        }
        catch(err) {
            console.log(err)
        }
        
    }

    const handleChange = (e) => {
        setaddProduct({
            ...addProduct,
            [e.target.name]: e.target.value
        })
    }

    function selectCategory (e) {
        var categorySelected = e.target.value;
        var aux=[categorySelected]

        
        if(!e.target.checked) {
            let filtered = inputCategories.filter(e => e!=categorySelected)
            setInputCategories(filtered)

        }else {
            setInputCategories(inputCategories.concat(aux))
            
        }
        
    }

    useEffect(()=>{
        setaddProduct({...addProduct, category: inputCategories})
    },[inputCategories])

    function renderCategories() {
        return (
            <div> Categorias
                {storeCategories.map((c, i)=>{
                    return (
                        <div>
                            <input 
                            type='checkbox' 
                            id={i} 
                            name={c.name}
                            value={c.id}
                            onChange={e=>selectCategory(e)}/>
                            <label for={i}>{c.name}</label><br/>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="text-center mt-3">Creación de productos</h1>
            <form onSubmit={handleSubmit}>
                <p>Order: 123</p>
                <div className="mb-3">
                    <label className="form-label">
                        Nombre del Producto
                    </label>
                    <input
                        name="title"
                        value={addProduct.title}
                        onChange={handleChange}
                        className="form-control"
                        autoComplete="off"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Resumen del Producto
                    </label>
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
                    <label className="form-label">
                        Precio
                    </label>
                    <input
                        type='number'
                        name="price"
                        value={addProduct.price}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="$"
                        autoComplete="off"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        numero de catalogo
                    </label>
                    <input
                        type='number'
                        name="catalog_id"
                        value={addProduct.catalog_id}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="$"
                        autoComplete="off"
                    />
                </div>

                    {/* <select
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        >
                        <option >-Categoria-</option>
                        <option >One</option>
                        <option >Two</option>
                        <option >Three</option>
                    </select> */}
                {renderCategories()}  
                {ReactFirebaseFileUpload(images,setImages)}    

                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default ProductCreation
