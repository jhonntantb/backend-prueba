
import React, { useEffect, useState } from 'react';
import { withFirebase } from '../../FireBase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../routes'
import NotFound from '../../../views/NotFound/NotFound';

const  PasswordChangePage = () => {

  const authUser= localStorage.getItem("pg_merceria");

   return (<div>
    <PasswordChangeForm/>
  </div>)
}


const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};



function PasswordChangeFormBase(props) {
  const [state, setState] = useState(INITIAL_STATE)
  const [isInvalid, setIsInvalid] = useState(true)


  const onSubmit = event => {
    
    const { passwordOne } = state;

    props.firebase
      .doPasswordUpdate(passwordOne)
      .doSignOut()
      .then(() => {
        //aqui debe ir el dispatch al back con la actuaizacion del PW
        setState({ ...INITIAL_STATE });
        props.history.push('/signin')
      })
      .catch(error => {
        setState({ error });
      });

      event.preventDefault()
    
  };

  const onChange = event => {
    setState({ ...state,
      [event.target.name]: event.target.value });
  };


  const { passwordOne, passwordTwo, error } = state;

  
    

    useEffect(()=>{
      if(passwordOne !== passwordTwo || passwordOne === '') {
        setIsInvalid(true)
      }else {
        setIsInvalid(false)
      }
    },[state])

  return (
    <div className="col-sm-9 grid-main">
    <div className="column main">
        <form onSubmit={onSubmit}>
            <fieldset className="fieldset info">
            <input
                name="passwordOne"
                value={passwordOne}
                onChange={onChange}
                type="password"
                placeholder="New Password"
                className="form-control"
              />
              <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={onChange}
                type="password"
                placeholder="Confirm New Password"
                className="form-control mt-3"
              />
              {isInvalid&&state.passwordOne!==''? <div>las contraseñas deben coincidir</div>:null}
              
              <div className="d-grip gap-2 mb-3 text-center">
                <button disabled={isInvalid} className="btn btn-dark btn-lg mt-4 border-0 rounded-0" type="submit">
                  Reset My Password
                </button>
              </div>

              {error && <p>{error.message}</p>}
            </fieldset>
        </form>
    </div>
</div>
  );
}

const PasswordChangeLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_CHANGE}>Cambiar mi contraseña</Link>
  </p>
);


export default PasswordChangePage;

const PasswordChangeForm = withFirebase(PasswordChangeFormBase);

export { PasswordChangeForm, PasswordChangeLink };

