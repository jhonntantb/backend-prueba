import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'recompose';
import { createUser, clearUser} from '../../../redux/actions/user/index';
import {sendEmailConfirmation} from '../../../redux/actions/mail/index';
import { withFirebase } from '../../FireBase';
import * as ROUTES from '../../../routes';
import {validateUserName, validateUserEmail} from "./errorsControl"
import { callCity,callCountries, callRegion } from './locationCall';


import './index.css';




const SignUpPage = () => (
  <div>

    <SignUpForm />
  </div>
);

const initial_state = {
  user_name: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

function SignUpFormBase(props) {

  const storeUser = useSelector(state=>state.userReducer.user)
  const storePrevUser = useSelector(state=>state.userReducer.previousUser)
  const dispatch = useDispatch();
  

  var [state, setState] = useState(initial_state)
  var [userError, setUserError] = useState(false)
  var [emailError, setEmailError] = useState(false)

  const onSubmitHandler = async (e) => {

    const { user_name, first_name, last_name, email, passwordOne, province, city, street, number, country } = state;
    e.preventDefault();

    try {
      var authUser = await props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne);
      var userOk = {
        id: authUser.user.uid,
        user_name,
        first_name,
        last_name,
        email,
        address: street + ' - ' + number,
        province: province,
        location: city,
        country: country,
        active: false
      }
      

      if (authUser.user.uid !== undefined) {
        dispatch(createUser(userOk))
        setState({ ...initial_state })
      }else {
        throw new Error("Se produjo un Error, por favor contactar al administrador")
      }

    } catch (error) {

      setState({...state, error: error})
    }
  }

  const onChangeHandler = async (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

    if(e.target.name==="user_name") {

      if(e.target.value.length>3) {
        var validated = await validateUserName(e.target.value)
         setUserError(validated)

      }else{setUserError(false)}
    }

    if(e.target.name==="email") {

      if(e.target.value.includes("@")&&e.target.value.includes(".com")) {
        var validated = await validateUserEmail(e.target.value)
         setEmailError(validated)
  

      }else{

        if(e.target.value.length>0) {
          setEmailError(true)
        }else{setEmailError(false)}
          
        }
    }
    
  }

  const { user_name,first_name,last_name,email,passwordOne,passwordTwo,country,province,city,street,number,error,
  } = state;

  const isInvalid =
    (passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      user_name === '');

  useEffect(()=>{
    if(storeUser.email === email) {
      alert("verifica tu correo electronico para continuar con el proceso")
        dispatch(sendEmailConfirmation(storeUser))
        dispatch(clearUser())
        props.history.push(ROUTES.LANDING)
    }
  },[storeUser])    

  


  return (
    <div className="container mt-5">
      <div className="row content d-flex justify-content-center">
        <div className="col-md-5">
          <div className="box shadow bg-white p-4">
            <h3 className="mb-4 text-center fs-1">Registrarse</h3>
            <form className='user-main mb-3' onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label
                hidden={user_name.length>3||user_name.length===0}
                className="username-error"
                >El Nombre de usuario debe contar con al menos 4 caracteres</label>
                <input
                  name="user_name"
                  value={user_name}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Nombre de Usuario"
                  className="form-control"
                />
                <label
                hidden={!(userError)}
                className="password-cont"
                >El nombre de usuario ya esta en uso</label>
              </div>
              <div className="mb-3">
                <input
                  name="first_name"
                  value={first_name}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Nombre"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="last_name"
                  value={last_name}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Apellido"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label
                className="password-cont"
                hidden={!emailError}
                >El email no tiene el formato adecuado o ya se encuentra registrado</label>
                <input
                  name="email"
                  value={email}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="passwordOne"
                  value={passwordOne}
                  onChange={onChangeHandler}
                  type="password"
                  placeholder="Contraseña"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={onChangeHandler}
                  type="password"
                  placeholder="Confirmar Contraseña"
                  className="form-control"
                />
                <label 
                hidden={passwordOne===passwordTwo}
                className='password-cont'
                >{`las contraseñas deben coincidir`}</label>
              </div>
              <div className="mb-3">
                <input
                  name="country"
                  value={country}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Pais"
                  className="form-control"
                />
                  
              </div>
              <div className="mb-3">
                <input
                  name="province"
                  value={province}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="provincia"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="city"
                  value={city}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="ciudad"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="street"
                  value={street}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="calle"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="number"
                  value={number}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="numero de calle"
                  className="form-control"
                />
              </div>

              <div className="d-grip gap-2 mb-3 text-center">
                <button className="btn btn-dark btn-lg border-0 rounded-0" disabled={isInvalid} type="submit">Sign Up</button>
              </div>

              {error && <p className='text-danger text-center'>{error.message}</p>}

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const SignUpLink = () => {
  return (<p> 
    <hr />
    <Link className="text-dark" to={ROUTES.SIGN_UP}>crear cuenta</Link>
  </p>)
}

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };