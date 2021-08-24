import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllOffice } from '../../redux/actions/office/index'
import Calendary from './Calendary'

function Turnero() {
    const dispatch = useDispatch()
    const [viewOffice,setViewOffice]=useState([])
    const [selectOffice,setSelectOffice]=useState(false)

    const allOffices = useSelector(state => state.officeReducer.offices)
    useEffect(() => {
        dispatch(getAllOffice())
    }, [])

    useEffect(() => {
        setViewOffice(allOffices)
    }, [allOffices])

    const userSelectOffice=(e)=>{
        setSelectOffice(!selectOffice)
    }
    console.log("Holaaaaaaaa")
    return (
        <div>
            <br />
            <br />
            <br />
            <h3>Estamos en turnero</h3>
            <button onClick={e=>userSelectOffice(e)} >Recojer en Oficina</button>
            <div>
                {selectOffice&&viewOffice.length>0&&
                viewOffice.map(ofi=>
                    <div key={ofi.codesuc}>
                        <button>
                        <p>Nombre: {ofi.name}</p>
                        <p>Dirección: {ofi.address}</p>
                        <p>Telefono: {ofi.phone} </p>
                        </button>
                    </div>)
                }
            </div>
            <div>
                <Calendary/>
            </div>
        </div>
    )
}

export default Turnero
