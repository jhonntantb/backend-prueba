import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllOffice } from '../../../redux/actions/office'
import NewOffice from './NewOffice'
import UpadateOffice from './UpadateOffice'
import ScheduleAndQuotes from './ScheduleAndQuotes'


function Office() {
    const dispatch = useDispatch()
    const [offices,setOffices]=useState([])
    const [myData, setMyData] = useState(true)
    const [renderNewOffice,setRenderNewOffice]=useState(false)
    const [renderUpdateOffice,setRenderUpdateOffice]=useState(false)
    const [renderOfficeQuote,setRenderOfficeQuote]=useState(false)

    const [selectedDate,setSelectedDate] = useState(null);

    const allOffices = useSelector(state => state.officeReducer.offices)

    useEffect(() => {
        dispatch(getAllOffice())
    }, [])
    useEffect(() => {
        setOffices(allOffices)
    }, [allOffices])

    const manageOffices=(e)=>{
        setRenderNewOffice(!renderNewOffice)
        setRenderUpdateOffice(false)
        setRenderOfficeQuote(false)

    }
    const updateOfficeInfo=(e)=>{
        setRenderUpdateOffice(!renderUpdateOffice)
        setRenderNewOffice(false)
        setRenderOfficeQuote(false)
    }
    const officeQuotes=(e)=>{
        setRenderOfficeQuote(!renderOfficeQuote)
        setRenderNewOffice(false)
        setRenderUpdateOffice(false)
    }
    return (
        <div>
             <main className="page-main">
            <div>
                <div>
                    <div className="page-title-wraper">
                    </div>
                    <div className="colums container">
                        <div className="row">
                            <div className="col-sm-3 grid-left px-1">
                                <div className="sidebar sidebar-main">
                                    <div className="block account-nav">
                                        <div className="content account-nav-content">
                                            <ul>
                                                {/* <li > <button type="submit" className="items my-2" onClick={e=>officeQuotes(e)}>Modificar Horario de Recojo</button></li> */}
                                                <li > <button type="submit" className="items my-2" onClick={e=>manageOffices(e)} >Crear o Eliminar Oficina</button></li>
                                                <li > <button type="submit" className="items my-2" onClick={e=>updateOfficeInfo(e)} >Modificar datos de una Oficina</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="col-sm-9 grid-main px-5">
                                    <div>
                                        {renderNewOffice&&<NewOffice/>}  
                                    </div>
                                    <div>
                                        {renderUpdateOffice&&<UpadateOffice/>}
                                    </div>
                                    <div>
                                        {renderOfficeQuote&&<ScheduleAndQuotes selectedDate={selectedDate} setSelectedDate={setSelectedDate} /> }
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    )
}

export default Office