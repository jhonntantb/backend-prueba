import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { getUser, updateUser } from '../../redux/actions/user'

function Index() {
    const dispatch = useDispatch()
    const userId=localStorage.getItem("pg_merceria")
    const [inputId,setInputId]=useState([])
    const [disabled,setDisabled]=useState([])
    const [userInf,setUserInf]=useState({
        username:"",
        email:"",
        name:"",
        phone:null,
        province:"",
        location:"",
        address: ""
    })

    const user = useSelector(state => state.userReducer.user)

    useEffect(() => {
        dispatch(getUser(id))
    }, [])

    const handleChange=(e)=>{
        setUserInf(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
    }

    const handleClickModify=(e)=>{
        e.preventDefault();
        //setear disabled del input en false
        //para que el nuevo valor se rellene y actualize el usuario
        setInputId([...inputId,e.target.id])

    }
    const handleUserUpdate=(e)=>{
        e.preventDefault();
        // la forma en la que esta manejado es la siguiente uptadeUser(params) params:[{id:userId,changes:{los cambios}}]
        //falta verificar con henry el phone
        dispatch(updateUser([{id:userId,changes:userInf}]))
    }

    return (
        <div>
            <button>Mis Datos</button>
            <button>Seguridad</button>
            <div>
                {   <div>
                    <h4>Datos Personales</h4>
                    <label htmlFor="username">UserName</label>
                    <input type="text" disabled={inputId.includes(e.target.id)} value={user?user.user_name:null} name="username" id="username" onChange={e=>handleChange(e)}/>
                    <button id="username" onClick={e=>handleClickModify(e)} >Modificar</button>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" value={} name="email" id="email" onChange={e=>handleChange(e)} />
            
                    <label htmlFor="name">Nombre y Apellido</label>
                    <input type="text" value={} name="name" id="name" onChange={e=>handleChange(e)} />
                    <button>Modificar</button>
                    <label htmlFor="phone">Telefono</label>
                    <input type="text" value={} name="phone" id="phone" onChange={e=>handleChange(e)} />
                    <button>Modificar</button>
                    <h4>Direcciones</h4>
                    <label htmlFor="province">Distrito</label>
                    <input type="text" value={} name="province" id="province" onChange={e=>handleChange(e)} />
                    <button>Modificar</button>
                    <label htmlFor="location">Locación</label>
                    <input type="text" value={} name="location" id="location" onChange={e=>handleChange(e)} />
                    <button>Modificar</button>
                    <label htmlFor="address">Dirección</label>
                    <input type="text" value={}  name="address" id="address" onChange={e=>handleChange(e)} />
                    <button>Modificar</button>
                    
                    </div>
                }
                <button onClick={e=>handleUserUpdate(e)} >Guardar Cambios</button>
            </div>
            
        </div>
    )
}

export default Index
