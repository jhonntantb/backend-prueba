import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SignUpLink } from '../SignUp/index';
import { PasswordForgetLink } from '../PasswordForget/index';
import { withFirebase } from '../../FireBase';
import * as ROUTES from '../../../routes';
import { LogInUser } from '../../../redux/actions/login/index'
import {getUser} from '../../../redux/actions/user/index';

const SignInPage = () => (
  <div className="container">

    <SignInForm />

  </div>
);

const initial_state = {
  email: '',
  password: '',
  error: null,
};

function SignInFormBase(props) {
  const user = useSelector(state=>state.userReducer.user)
  var [state, setState] = useState(initial_state)
  const dispatch = useDispatch();

  const onSubmit = event => {
    const { email, password } = state;

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        // console.log('userCredentials tiene: ' + Object.keys(userCredentials))
        // console.log('userCredentials.user tiene: ' + Object.keys(userCredentials.user))
        dispatch(LogInUser(userCredentials.user.email))

        dispatch(getUser(userCredentials.user.uid))
        setState({ ...initial_state });

        
      })
      .catch(error => {
        setState({ error });
      });

    event.preventDefault();
  };

  const onChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  useEffect(()=>{
    console.log('esto es user:  ' + user)
    if(user!=='guest') {
      //si user no es guest, verifica si es admin
      if(user.isAdmin===true) {
        sessionStorage.setItem("pg_merceria" , ('admin-'+user.id))
        props.history.push(ROUTES.HOME);
      }else {
        //si no es admin simplemente setea la sesion con el id de usuario
        sessionStorage.setItem("pg_merceria", user.id)
        props.history.push(ROUTES.HOME);
      }
    } else {
      //si user es guest, setea la session a guest
      sessionStorage.setItem("pg_merceria", 'guest')

    }
    
  },[user])


  const { email, password, error } = state;

  const isInvalid = (password === '' || email === '');

  return (
    <div className="container mt-5">
      <div className="row content d-flex justify-content-center">
        <div className="col-md-5">
          <div className="box shadow bg-white p-4">
            <h3 className="mb-4 text-center fs-1">Sign in</h3>
            <form className="mb-3" onSubmit={onSubmit}>
              <div className="form-floating mb-3">
                <input
                  name="email"
                  className="form-control rounded-0"
                  id="floatingInput"
                  value={email}
                  onChange={onChange}
                  type="text"
                  placeholder="name@example"

                />
                <label for="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="password"
                  value={password}
                  onChange={onChange}
                  type="password"
                  placeholder="Password"
                  className="form-control rounded-0"
                  id="floatingPassword"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="d-grip gap-2 mb-3 text-center">
                <button className="btn btn-dark btn-lg border-0 rounded-0" disabled={isInvalid} type="submit">
                  Submit
                </button>
              </div>


              {error && <p className="text-danger text-center">{error.message}</p>}
              <div className="d-grip gap-2">
                <PasswordForgetLink />
                <SignUpLink />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );

}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };