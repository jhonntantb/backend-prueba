import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllOffice } from '../../../redux/actions/office'
import NewOffice from './NewOffice'
import UpadateOffice from './UpadateOffice'


function Office() {
    const dispatch = useDispatch()
    const [offices,setOffices]=useState([])
    const [showSchedule,setShowSchedule]=useState(false)
    const [renderNewOffice,setRenderNewOffice]=useState(false)
    const [renderUpdateOffice,setRenderUpdateOffice]=useState(false)
    const [idOffice,setIdOffice]=useState("")

    const allOffices = useSelector(state => state.officeReducer.offices)

    useEffect(() => {
        dispatch(getAllOffice())
    }, [])
    useEffect(() => {
        setOffices(allOffices)
    }, [allOffices])

    const showSchedulesandQuotes=(event)=>{
        event.preventDefault();
        setShowSchedule(true)
        setIdOffice(event.target.id)
    }
    const manageOffices=(e)=>{
        setRenderNewOffice(!renderNewOffice)
    }
    return (
        <div>
            Estamos en Oficina
            <div>
                <button>Modificar Horario de atención</button>
                <button>Modificar cupos por hora</button>
                <button onClick={e=>manageOffices(e)} >Crear o Eliminar Oficina</button>
                <button onClick={e=>setRenderUpdateOffice(!renderUpdateOffice)}>Modificar datos de una Oficina</button>
            </div>
            <div>
                {offices.length>0&&offices.map(e=>
                    <button id={e.id} onClick={event=>showSchedulesandQuotes(event)}>{e.name}</button>
                )}
            </div>

            <div>
                {showSchedule&&offices.length
                >0&& (offices.find(e=>e.id===idOffice)).schedule.date.map((s)=>
                <div>
                    <button disabled={true}>{s}</button>
                    <input min="0" type="number" placeholder="numero de cupos"/>
                </div>
                )}
            </div>
            <div>
                {renderNewOffice&&<NewOffice/>}  
            </div>
            <div>
                {renderUpdateOffice&&<UpadateOffice/>}
            </div>

        </div>
    )
}

export default Office
