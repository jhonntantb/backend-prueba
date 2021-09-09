import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { createOffice, deleteOffice, getAllOffice } from '../../../redux/actions/office';

function NewOffice() {
    const dispatch = useDispatch()
    const {push} =useHistory()
    const [viewOffices,setViewOffices]=useState([])
    const [renderOffices,setRenderOffices]=useState(true)
    const [allCodesuc,setAllCodesuc]=useState([])
    const [renderNewOffice,setRenderNewOffice]=useState(false)
    const [newOffice,setNewOffice]=useState({
        codesuc: 0,
        name:"",
        address:"",
        phone:0
        
    })

    const AllOffices = useSelector(state => state.officeReducer.offices)

    useEffect(() => {
        dispatch(getAllOffice())
    }, [])
    useEffect(() => {
        setViewOffices(AllOffices)
        setAllCodesuc(AllOffices.map(o=>o.codesuc))
    }, [AllOffices])
    const handleChange=(e)=>{
        setNewOffice(values => ({
            ...values,
            [e.target.name]: e.target.value
          }))
    }
    const postNewOffice=(e)=>{
        dispatch(createOffice(newOffice))
    }
    const deleteOffices=(event)=>{
        console.log(event.target.id)
        dispatch(deleteOffice(event.target.id))
        push("/admin/offices")
    }
    const renderFormNewOffice=(e)=>{
        setRenderNewOffice(!renderNewOffice)
    }
    return (
        <div>
            <div>
                <h3>Sucursales Existentes</h3>
                {renderOffices&&
                <div> 
                    <table>
                    <thead>
                    <tr>
                        <th scope="col">Codesuc</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">modificar</th>
                        </tr>
                    </thead>
                    {viewOffices.length>0&&viewOffices.map(e=>
                            <tbody>
                                <tr>
                                    <td>{e.codesuc}</td>
                                    <td>{e.name}</td>
                                    <td>{e.address}</td>
                                    <td>{e.phone}</td>
                                    <td>
                                        <div  className="primary">
                                        <button  type="submit" className="action save primary" id={e.id} disabled={true} onClick={(event)=>deleteOffices(event)} >
                                            <span>Eliminar Oficina</span>
                                        </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>   
                        )}
                </table> 
                </div>}   
            </div>
            <br />
            <div>
                <div className="primary">
                    <button type="submit" className="action save primary" onClick={e=>renderFormNewOffice(e)}>
                        <span>Crear nueva Oficina</span>
                        </button>
                </div>
            <br />
            <br />
            {renderNewOffice&&
            <div className="col-sm-9 grid-main px-5">
                <form>
                <fieldset className="fieldset info">
                    <legend className="legend">
                    <span>Datos Requeridos Para la Creación</span>
                    </legend>
                        <br />
                        <div className="field field-username required">
                            <label htmlFor="codesuc" className="label">
                                <span>Codesuc</span>
                            </label>
                            <div className="control">
                                <input type="number" name="codesuc" className="input-text required-entry" aria-required="true" id="codesuc" onChange={e => handleChange(e)} />
                            </div>
                        </div>
                        <div className="field field-email required">
                            <label htmlFor="nombre" className="label">
                                <span>Nombre</span>
                            </label>
                            <div className="control">
                                <input type="text" name="name" className="input-text required-entry" aria-required="true" id="name" />
                            </div>
                         </div>
                        <div className="field field-name-firstname required">
                            <label htmlFo="address" className="label">
                                <span>Dirección</span>
                            </label>
                            <div className="control">
                            <input id="address" type="text" name="address" aria-required="true" class="input-text required-entry" onChange={e => handleChange(e)} />
                            </div>
                        </div> 
                        <div className="field field-name-firstname required">
                            <label htmlFo="phone" className="label">
                                <span>Telefono</span>
                            </label>
                            <div className="control">
                            <input id="phone" type="number" name="phone" aria-required="true" class="input-text required-entry" onChange={e => handleChange(e)} />
                            </div>
                        </div>   
                    </fieldset>
                    <div className="actions-toolbar">
                        <div className="primary">
                            <button type="submit" className="action save primary" onClick={e=>postNewOffice(e)}>
                                <span>Crear Nueva Oficina </span>
                            </button>
                        </div>
                    </div>
                </form>
                </div>}
            </div>


        </div>
    )
}

export default NewOffice
