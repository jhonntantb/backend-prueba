import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useState } from 'react';


import { useDispatch } from 'react-redux';

import { compose } from 'recompose';

import { withFirebase } from '../../FireBase';
import * as ROUTES from '../../../routes';

import { createUser } from '../../../redux/actions/user/index';

import "./twoSteps.css";

const twoStepsAuthPage = () => ( 
    <div className="main-container">
        aqui estoy
        <TwoStepsForm/>
    </div>)



const initial_state = {
    email: "", 
    error: null
}

function TwoStepsAuthBase (props) {

    const [state, setState] = useState(initial_state)

    

   async function submitHandler(e) {

    console.log("twoSteps: email" , state.email)
        e.preventDefault()

        try {

           await props.firebase.doSendSignInLinkToEmail(state.email)
           alert("verifica tu cuenta de correo") 

        }catch(err) {
            alert("error en el envio del link  -" + err.message)
            setState({...state, error: err})
        }



    }

    function changeHandler (e) {
        e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    }

    const {email, error} = state;



    return (<div className="container mt-5">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label>Ingresa tu direccion de correo electronico</label>
                    <input 
                    type='text'
                    name='email'
                    value={email}
                    placeholder="Email"
                    onChange={changeHandler}/>
                </div>
                <br/>

                <button
                className="btn btn-dark btn-lg border-0 rounded-0" 
                type='submit'>Enviar</button>

                {error && <p className='text-danger text-center'>{error.message}</p>}
            </form>

    </div>)
}



const TwoStepsForm = compose(
    withRouter,
    withFirebase,
  )(TwoStepsAuthBase);

  export default twoStepsAuthPage;

  export {TwoStepsForm}