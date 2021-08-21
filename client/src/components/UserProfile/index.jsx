import React, { useState, useEffect } from 'react'
import { Form, Label, Input, FormText, FormGroup } from "reactstrap";
import { useDispatch,useSelector } from "react-redux"
import { getUser, updateUser } from '../../redux/actions/user'

function Index() {
    const dispatch = useDispatch()
    const userId=localStorage.getItem("pg_merceria")
    const user = useSelector(state => state.userReducer.user)
    useEffect(() => {
        dispatch(getUser(userId))
    }, [])
    const [inputId,setInputId]=useState([])
    const [disabled,setDisabled]=useState(["username","phone"])
    const [username,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [firtName,setFirstName]=useState("")
    const [lastname,setLastname]=useState("")
    const [location,setLocation]=useState("")
    const [province,setProvince]=useState("")
    const [address,setAddress]=useState("")

   useEffect(() => {
       if(typeof user==="object"){
           setUserName(user.username)
       }
   }, [user])
    
    const handleChange=(e)=>{
        
    }

    const handleClickModify=(e)=>{
        e.preventDefault();
        console.log(e.target.id)
        //setear disabled del input en false
        //para que el nuevo valor se rellene y actualize el usuario
        setDisabled(disabled.filter(n=>n!==e.target.id))

    }
    const handleUserUpdate=(e)=>{
        e.preventDefault();
        // la forma en la que esta manejado es la siguiente uptadeUser(params) params:[{id:userId,changes:{los cambios}}]
        //falta verificar con henry el phone
        dispatch(updateUser([{id:userId,changes:{}}]))
    }

    return (
        <div>
            <button>Mis Datos</button>
            <button>Seguridad</button>
            <div>
                {user&&   <div>
                    <h4>Datos Personales</h4>
                    <form>
                    <label htmlFor="username">UserName</label>
                    <input type="text"   value={""} name="username" id="username" onChange={e=>handleChange(e)}/>
                    <button id="username" onClick={e=>handleClickModify(e)} >Modificar</button>
                    </form>
                    
                    
                    
                    <label htmlFor="email">E-mail</label>
                    <input type="text" value={user?user.email:null} name="email" id="email" onChange={e=>handleChange(e)} />
            
                    <label htmlFor="name">Nombre y Apellido</label>
                    <input type="text" value={user?user.first_name +" "+ user.last_name:null} name="name" id="name" onChange={e=>handleChange(e)} />
                    <button>Modificar</button>
                    <label htmlFor="phone">Telefono</label>
                    <input type="text" value={user?user.phone_number:null} name="phone" id="phone" onChange={e=>handleChange(e)} />
                    <button>Modificar</button>
                    <h4>Direcciones</h4>
                    <label htmlFor="province">Provincia</label>
                    <input type="text" value={user?user.province:null} name="province" id="province" onChange={e=>handleChange(e)} />
                    <button>Modificar</button>
                    <label htmlFor="location">Locación</label>
                    <input type="text" value={user?user.location:null} name="location" id="location" onChange={e=>handleChange(e)} />
                    <button>Modificar</button>
                    <label htmlFor="address">Dirección</label>
                    <input type="text" value={user?user.address:""}  name="address" id="address" onChange={e=>handleChange(e)} />
                    <button>Modificar</button>
                    
                    </div>
                }
                <button onClick={e=>handleUserUpdate(e)} >Guardar Cambios</button>
            </div>
            
        </div>
    )
}

export default Index
