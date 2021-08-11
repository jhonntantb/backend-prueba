import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { getAllOffice } from "../../../redux/actions/office/index"
 


function Stock() {
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getAllOffice())
    }, [])

    const offices= useSelector(state =>state.officeReducer.offices)
    //me esta llegando office falta mapear botones paar que solo selecciones una officina
    //back enviar officina con productos y stock 
    
    return (
        <div>
            <p>Estamos en Stock</p>
            {offices&&offices.length>0?offices.map(e=><p>{e.name}</p>):
            <p>No hay oficinas</p>}
            
        </div>
    )
}

export default Stock
