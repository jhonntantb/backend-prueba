import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllOffice, updateOffice } from '../../../redux/actions/office';

function UpadateOffice() {
    const dispatch=useDispatch();
    const [viewOffices,setViewOffices]=useState([])
    const [codesuc,setCodesuc]=useState(null)
    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const [phone,setPhone]=useState(null)
    const [form,setForm]=useState(false)
    const [idOffice,setIdOffice]=useState("")

    const allOffices = useSelector(state => state.officeReducer.offices)
    useEffect(() => {
        dispatch(getAllOffice()) 
    }, [])
    useEffect(() => {
        setViewOffices(allOffices)
    }, [allOffices])

    const handleChange=(e)=>{
       if(e.target.name==="codesuc") setCodesuc(e.target.value);
       if(e.target.name==="name") setName(e.target.value);
       if(e.target.name==="phone")setPhone(e.target.value);
       if(e.target.name==="address") setAddress(e.target.value);
    }
    const setUpdateOffice=(e)=>{
        setForm(!form)
        setIdOffice(e.target.id)
        const office=allOffices.find(o=>o.id===e.target.id)
        setCodesuc(office.codesuc)
        setName(office.name)
        setPhone(office.phone)
        setAddress(office.address)
    }
    const changes={
        codesuc:codesuc,
        name:name,
        phone:phone,
        address:address
    }
    const sendOfficeChanges=(e)=>{
        dispatch(updateOffice({changes:changes,id:idOffice}))
    }

    return (
        <div>
            <div>
            {<div>
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
                                    <td><button id={e.id} onClick={(event)=>setUpdateOffice(event)} >Modificar Oficina</button></td>
                                </tr>
                            </tbody>   
                        )}
                </table> 
                </div>
            }
            </div>
            <br />
            <br />
            <div>
            {form&&
            <div className="col-sm-9 grid-main px-5">
                <form>
                <fieldset className="fieldset info">
                    <legend className="legend">
                    <span>Datos de la Oficina</span>
                    </legend>
                        <br />
                        <div className="field field-username required">
                            <label htmlFor="codesuc" className="label">
                                <span>Codesuc</span>
                            </label>
                            <div className="control">
                                <input type="number" name="codesuc" disabled={true} value={codesuc} className="input-text required-entry" aria-required="true" id="codesuc" onChange={e => handleChange(e)} />
                            </div>
                        </div>
                        <div className="field field-email required">
                            <label htmlFor="nombre" className="label">
                                <span>Nombre</span>
                            </label>
                            <div className="control">
                                <input type="text" name="name" value={name} className="input-text required-entry" aria-required="true" id="name" />
                            </div>
                         </div>
                        <div className="field field-name-firstname required">
                            <label htmlFo="address" className="label">
                                <span>Dirección</span>
                            </label>
                            <div className="control">
                            <input id="address" type="text" name="address"  value={address} aria-required="true" class="input-text required-entry" onChange={e => handleChange(e)} />
                            </div>
                        </div> 
                        <div className="field field-name-firstname required">
                            <label htmlFo="phone" className="label">
                                <span>Telefono</span>
                            </label>
                            <div className="control">
                            <input id="phone" type="number" name="phone" value={phone} aria-required="true" class="input-text required-entry" onChange={e => handleChange(e)} />
                            </div>
                        </div>   
                    </fieldset>
                    <div className="actions-toolbar">
                        <div className="primary">
                            <button type="submit" className="action save primary" onClick={e=>sendOfficeChanges(e)}>
                                <span>Guardar Cambios </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>    
            }
            </div>
            
        </div>
    )
}

export default UpadateOffice
