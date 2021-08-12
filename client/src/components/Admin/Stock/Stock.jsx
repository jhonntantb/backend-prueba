import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { getAllOffice } from "../../../redux/actions/office/index"
import { getAllProduct } from '../../../redux/actions/product'
import { updateStock } from '../../../redux/actions/stock'
import "./Table.css"
 


function Stock() {
    const dispatch=useDispatch()

    const [stock,setStock]=useState([])//en que viene para la tabla
    const [product,setProduct]=useState([])//lo que vamos enviar para modificar
    const [checked,setChecked]=useState([])
    const [available,setAvailable]=useState(true)
    
    useEffect(() => {
        dispatch(getAllOffice())
        dispatch(getAllProduct())
    }, [])

    const offices= useSelector(state =>state.officeReducer.offices)
    const productsAll= useSelector(state =>state.productReducer.products)
    const handleClick=(e,id)=>{
        e.preventDefault()
        setStock(productsAll.filter(e=>e.stocks[0].officeId===id))
    }

    const selectProduct=(e,id)=>{
        const stockId=e.target.value
        if(!e.target.checked) {
            const selecteds = product.filter(e => e.id !==stockId)
            const checkeds= checked.filter(e=>e!==id)
            setChecked(checkeds)
            setProduct(selecteds)
            
        }else {
            let added = productsAll.find(e=>e.stocks[0].id==stockId)  
            setProduct([...product , {id:added.stocks[0].id,quantity:added.stocks[0].quantity}])
            //var abled=document.getElementById(id)
            setChecked(checked.concat([id]))

           
        } 
    }
    const handleStockchange=(event)=>{
        event.preventDefault()
        const search=productsAll.find(e=>e.stocks[0].id===event.target.id)
        const stockback=product.filter(e=>e.id!==event.target.id)
        setProduct(stockback.concat([{id:event.target.id,quantity:+(search.stocks[0].quantity)+ +(event.target.value)}]))
    }
  
    const handleChanges=()=>{
        console.log("hola")
        //dispatch(updateStock({stocks:product}))
    }

    return (
        <div>
           <br/>
            <div>
                {offices&&offices.length>0?offices.map(office=>
                <div key={office.id}>
                    <button onClick={e=>handleClick(e,office.id)} >{office.name}</button>
                </div>)
                :<p>No hay oficinas</p>}
            </div>
            <div>
            <table>
                <thead>
                    <tr>
                        <th>check</th>
                        <th>Catalogo ID</th>
                        <th>Productos</th>
                        <th>Cantidad</th>
                        <th>Agregar Cantidad</th>
                    </tr>
                </thead>
                    <tbody>
                {stock&&stock.length>0?stock.map( e =>
                    <tr>
                        <td>
                        <input className='checkbox' 
                            type='checkbox' 
                                value={e.stocks[0].id}
                                onChange={event=>selectProduct(event,e.id)}
                                defaultChecked={false}     
                        />
                        </td>
                        <td>{e.catalog_id}</td>
                        <td>{e.title}</td>
                        <td>{e.stocks[0].quantity}</td>  
                        <td id={e.id}>
                            <input  type="number"
                        onChange={event=>handleStockchange(event)} 
                        disabled={!checked.includes(e.id)}/>
                        </td> 
                    </tr>
                    ):null
                }
                {stock&&stock.length>0?<button onClick={handleChanges}>Enviar cambios</button>:null}
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default Stock
