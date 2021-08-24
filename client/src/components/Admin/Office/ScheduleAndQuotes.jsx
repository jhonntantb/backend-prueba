import React,{ useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getAllOffice } from '../../../redux/actions/office'

function ScheduleAndQuotes() {
    const dispatch = useDispatch()
    const [showForm,setShowForm]=useState(false)
    const [offcieId,setOfficeId]=useState("")

    const allOffices = useSelector(state => state.officeReducer.offices)
    
    useEffect(() => {
        dispatch(getAllOffice())
    }, [])
    
    const handleOffice=(e)=>{
        e.preventDefault()
        setShowForm(true)
        setOfficeId(e.target.id)
    }
    return (
        <div>
            <div>
                {allOffices&&allOffices.length>0&&
                allOffices.map(e=>
                    <div>
                        <button id={e.id} onClick={event=>handleOffice(event)} >{e.name}</button>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default ScheduleAndQuotes
