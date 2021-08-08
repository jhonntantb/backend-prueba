import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/category';
import {createProduct, getAllProduct} from '../../redux/actions/product';
import {getAllOffice} from '../../redux/actions/office';
import ReactFirebaseFileUpload from '../../components/FileUploader/FileUploader';

const ProductCreation = (props) => {
    const dispatch=useDispatch();

    

    const storeCategories = useSelector(state=>state.categoryReducer.categories)
    const storeProducts = useSelector(state => state.productReducer.products)
    

    const storeOffices = useSelector(state => state.officeReducer.offices)

    const [inputCategories, setInputCategories] = useState([]);
    const [inputOffice, setInputOffice] =useState([])
    const [storeImages, setStoreImages] = useState([]);

    const [addProduct, setaddProduct] = useState(
        {
            title: '',
            resume: '',
            detail: '',
            price: '',
            catalog_id: null,
            image: [],
            category: [],
            quantity: 0, 
            office: ''
        }
    )

    const handleSubmit =async (e) => {
        e.preventDefault()
        //// hacer dispatch para que haga el post
        setaddProduct({...addProduct, image: storeImages, office: inputOffice})
        try {
             dispatch(createProduct(addProduct))
             dispatch(getAllProduct())
            // alert('agregado exitosamente')
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

    function selectOffice (e) {
        var officeSelected = e.target.value;
        setInputOffice(officeSelected)
    
    }

    function renderOffices () {
        console.log('store offices tiene : ' , Object.keys(storeOffices))
        return (
            <div> Sucursal
                {<select onChange={e=>selectOffice(e)}>
                    {storeOffices.map((o,i)=>(
                        <option  
                        value={o.id}
                        >
                            {o.name}
                        </option>
                    ))}
                </select>}
            </div>
        )
    }
    useEffect( ()=>{
         dispatch(getAllCategory())
         dispatch(getAllOffice())
        
    },[])

    useEffect(()=>{
        setaddProduct({...addProduct, image: storeImages})
    },[storeImages])


    useEffect(()=>{
        setaddProduct({...addProduct, category: inputCategories})
    },[inputCategories])

    useEffect(()=>{
        setaddProduct({...addProduct, office: inputOffice})
    },[inputOffice])

    useEffect(()=>{

        if(storeOffices.length>0) setInputOffice(storeOffices[0].id);
        
        
    },[storeOffices])

    useEffect(()=>{
        
    },[storeProducts])

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
                        min='0'
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
                        min='0'
                        name="catalog_id"
                        value={addProduct.catalog_id}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="1000"
                        autoComplete="off"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        cantidad
                    </label>
                    <input
                        type='number'
                        name="quantity"
                        min='0'
                        value={addProduct.quantity}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="stock"
                        autoComplete="off"
                    />
                </div>
                {renderOffices()}
                {renderCategories()}  
                {/* {ReactFirebaseFileUpload([...storeImages],setStoreImages)} */}
                <ReactFirebaseFileUpload storeImages={storeImages} setStoreImages={setStoreImages}/>    

                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default ProductCreation
