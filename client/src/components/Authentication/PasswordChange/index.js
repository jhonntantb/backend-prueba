
import React, { useEffect, useState } from 'react';
import { withFirebase } from '../../FireBase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../routes'

const  PasswordChangePage = () => (
   <div>
    <PasswordChangeForm/>
  </div>
)

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
    <div className="container mt-5">
      <div className="row content d-flex justify-content-center">
        <div className="col-md-5">
          <div className="box shadow bg-white p-4">
            <h3 className="mb-4 text-center fs-1">Reset your password?</h3>
            <form className="mb-3" onSubmit={onSubmit}>
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
            </form>
          </div>
        </div>
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

