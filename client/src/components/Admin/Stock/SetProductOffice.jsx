import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { useHistory} from "react-router-dom"
import { getAllOffice } from "../../../redux/actions/office/index"
import { getAllProduct } from '../../../redux/actions/product'

function SetProductOffice() {
    const dispatch=useDispatch()

    //agregar productos ya existentes en la central a otras oficinas y mandar stock
    //formulario : seleccionar officina
    //listar los productos que no tiene esa oficina
    //cantida a agregar
    const offices=useSelector(state=>state.officeReducer.offices)
    const products=useSelector(state =>state.productReducer.products)
    useEffect(() => {
        dispatch(getAllOffice())
        dispatch(getAllProduct())
    }, [])


    return (
        <div>
            <h3>Agregar Productos existentes con stock a oficinas que no tengan</h3>
            {/* mapear las oficinas */}
            <h4>Productos que no tiene</h4>
            {/*maper los productos que no tiene*/}

            
        </div>
    )
}

export default SetProductOffice
