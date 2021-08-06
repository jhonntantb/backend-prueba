import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SignUpLink } from '../SignUp/index';
import { PasswordForgetLink } from '../PasswordForget/index';
import { withFirebase } from '../../FireBase';
import * as ROUTES from '../../../routes';
import {LogInUser} from '../../../redux/actions/login/index'

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const initial_state = {
  email: '',
  password: '',
  error: null,
};

function SignInFormBase (props) {
    var [state, setState] = useState(initial_state)
    const dispatch = useDispatch();
  
   const onSubmit = event => {
      const { email, password } = state;
  
      props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          // console.log('userCredentials tiene: ' + Object.keys(userCredentials))
          dispatch(LogInUser(userCredentials.user.email))
          sessionStorage.setItem("pg_merceria", userCredentials.user.email)
          setState({ ...initial_state });

          props.history.push(ROUTES.HOME);
        })
        .catch(error => {
            setState({ error });
        });
  
      event.preventDefault();
    };
  
    const onChange = event => {
      setState({ ...state,
        [event.target.name]: event.target.value });
    };
  
    
      const { email, password, error } = state;
  
      const isInvalid = (password === '' || email === '');
  
      return (
        <form onSubmit={onSubmit}>
          <input
            name="email"
            value={email}
            onChange={onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={onChange}
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>
  
          {error && <p>{error.message}</p>}
        </form>
      );
    
  }
  
  const SignInForm = compose(
    withRouter,
    withFirebase,
  )(SignInFormBase);
  
  export default SignInPage;
  
  export { SignInForm };