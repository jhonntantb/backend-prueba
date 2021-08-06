import React, { useState } from 'react'
import ReactFirebaseFileUpload from '../../components/FileUploader/FileUploader'

const ProductCreation = () => {

    const [addProduct, setaddProduct] = useState(
        {
            title: '',
            resume: '',
            detail: '',
            price: '',
        }
    )

    const [images, setImages] = useState([])
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

    return (
        <div className="container">
            <div className="row mt-5">
                <label>Catalog number: "#0542"</label>
                <label>Order: 123</label>
            </div>
            <h1 className="text-center mt-3">Creación de productos</h1>
            <div className="row">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
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

                            <select
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                >
                                <option >-Categoria-</option>
                                <option >Bastidores</option>
                                <option >Agujas</option>
                                <option >Tijeras</option>
                            </select>

                        

                        <button type="submit" className="btn btn-primary mt-3">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-6">
                    <h1>Subir Imagen</h1>
                    <hr />
                    <ReactFirebaseFileUpload setImages={setImages} images={images}/>
                   
                </div>
            </div>

        </div>
    )
}

export default ProductCreation
