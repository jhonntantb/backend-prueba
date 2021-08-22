import React, { useState, useEffect } from 'react'
import { Form, Label, Input, FormText, FormGroup } from "reactstrap";
import { useDispatch,useSelector } from "react-redux"
import { getUser, updateUser } from '../../redux/actions/user'
import AccountPage from '../Authentication/Account';
import PasswordChangePage from '../Authentication/PasswordChange';

function Index() {
    const dispatch = useDispatch()
    const userId=localStorage.getItem("pg_merceria")
    const user = useSelector(state => state.userReducer.user)
    useEffect(() => {
        dispatch(getUser(userId))
    }, [])
    //---------------------Render info----------------------------
    const [myData,setMyData]=useState(true)
    const [security,setSecurity]=useState(false)

    //--------------------Data User----------------------------
    const [disabledDirection,setDisabledDirection]=useState(true)
    const [disabledUser,setDisabledUser]=useState(true)//
    const [username,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [firstName,setFirstName]=useState("")
    const [lastname,setLastname]=useState("")
    const [phone,setPhone]=useState("")
    const [location,setLocation]=useState("")
    const [province,setProvince]=useState("")
    const [address,setAddress]=useState("")

   useEffect(() => {
       if(typeof user==="object"){
           setUserName(user.user_name)
           setEmail(user.email)
           setFirstName(user.first_name)
           setLastname(user.last_name)
           setPhone(user.phone_number)
           setLocation(user.location)
           setProvince(user.province)
           setAddress(user.address)
       }
   }, [user])
    
    const handleChange=(e)=>{
        e.target.id=="username"&&setUserName(e.target.value)
        e.target.id=="email"&&setEmail(e.target.value)
        e.target.id=="first_name"&&setFirstName(e.target.value)
        e.target.id=="last_name"&&setLastname(e.target.value)
        e.target.id=="phone"&&setPhone(e.target.value)
        e.target.id=="province"&&setProvince(e.target.value)
        e.target.id=="location"&&setLocation(e.target.value)
        e.target.id=="address"&&setAddress(e.target.value)
        
    }
    const showSecurity=(e)=>{
        e.preventDefault()
        setSecurity(true)
        setMyData(false)
        setDisabledDirection(true)
        setDisabledUser(true)
    }
    const ShowMyData=(e)=>{
        e.preventDefault()
        setMyData(true)
        setSecurity(false)
    }
    const modifyUserData=(e)=>{
        e.preventDefault();
        setDisabledUser(false)
    }
    const modifyUserDirection=(e)=>{
        e.preventDefault()
        setDisabledDirection(false)
    }

    const changes={
        username: username,
        first_name: firstName,
        last_name:lastname,
        email:email,
        phone_number:phone,
        province:province,
        location:location,
        address:address
    }
    console.log("estos son los cambios",changes)
    const handleUserUpdate=(e)=>{
        e.preventDefault();
        dispatch(updateUser([{id:userId,changes:changes}]))
        setDisabledUser(true)
        setDisabledDirection(true)
    }

    return (
        <div>
            <button onClick={e=>ShowMyData(e)}>Mis Datos</button>
            <button onClick={e=>showSecurity(e)} >Seguridad</button>
            <div>
                {myData===true&&user?
                <div>  
                 <div>
                    <h4>Datos Personales</h4>
                    
                    <form>
                        <div class="mb-3">
                            <label htmlFor="username" class="form-label">Username</label>
                            <input type="text" disabled={disabledUser} value={username} class="form-control" id="username" onChange={e=>handleChange(e)} />
                        </div>
                        <div class="mb-3">
                            <label htmlFo="email" class="form-label">E-mail</label>
                            <input type="email" value={email} disabled={true} class="form-control" id="email" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text">No puedes modificar tu email para mayor informacion contactanos</div>
                    
                        </div>
                        <div class="mb-3">
                            <label htmlFo="first_name" class="form-label">Nombre</label>
                            <input type="text" disabled={disabledUser} value={firstName} class="form-control" id="first_name" onChange={e=>handleChange(e)}/>
                        </div>
                        <div class="mb-3">
                            <label htmlFo="last_name" class="form-label">Apellido</label>
                            <input type="text" disabled={disabledUser} value={lastname} class="form-control" id="last_name" onChange={e=>handleChange(e)}/>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="phone" class="form-label">N° Telefonico de Contacto</label>
                            <input type="number" disabled={disabledUser} value={phone} class="form-control" id="phone" onChange={e=>handleChange(e)}/>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={e=>modifyUserData(e)}>Modificar Datos Personales</button>
                    </form>
                    <br />
                    <br />
                    <h4>Direcciones</h4>
                    <form>
                        <div class="mb-3">
                            <label htmlFor="province" class="form-label">Provincia</label>
                            <input type="text" disabled={disabledDirection} value={province} class="form-control" id="province" onChange={e=>handleChange(e)}/>
                    
                        </div>
                        <div class="mb-3">
                            <label htmlFor="location" class="form-label">Locación</label>
                            <input type="text" disabled={disabledDirection} value={location} class="form-control" id="location" onChange={e=>handleChange(e)}/>
                        </div>
                        <div class="mb-3">
                            <label htmlFo="address" class="form-label">Dirección</label>
                            <input type="text" disabled={disabledDirection} value={address} class="form-control" id="address" onChange={e=>handleChange(e)}/>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={e=>modifyUserDirection(e)}>Modificar Datos de Dirección</button>
                    </form> 
                </div>
                <br />
                <br />
                <button onClick={e=>handleUserUpdate(e)} >Guardar Cambios</button>
                </div>
                :<PasswordChangePage/>}
            </div>
            
        </div>
    )
}

export default Index
