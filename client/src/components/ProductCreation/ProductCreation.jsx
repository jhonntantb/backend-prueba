import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ProductCreation = () => {
    const dispatch=useDispatch();

    const storeCategories = useSelector(state=>state.categoryReducer.categories)

    const [inputCategories, setInputCategories] = useState([])

    const [addProduct, setaddProduct] = useState(
        {
            title: '',
            resume: '',
            detail: '',
            price: '',
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(addProduct);
    }

    const handleChange = (e) => {
        setaddProduct({
            ...addProduct,
            [e.target.name]: e.target.value
        })
    }

    function selectCategory (e) {
        var categorySelected = e.target.value;
        
        if(!e.target.checked) {
            let filtered = inputCategories.filter(e => e!=categorySelected)
            setInputCategories(filtered)
        }else {
            setInputCategories(inputCategories.concat([categorySelected]))
        }
    }

    function renderCategories() {
        return (
            <div>
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
                        name="price"
                        value={addProduct.price}
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

                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default ProductCreation
