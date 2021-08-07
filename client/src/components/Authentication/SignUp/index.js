import React from 'react';
import {Link , withRouter} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {compose} from 'recompose';

import { withFirebase } from '../../FireBase';
import * as ROUTES from '../../../routes';
import {createUser} from '../../../redux/actions/user/index';

import './index.css';
import { Alert } from 'reactstrap';


const SignUpPage = () => (
    <div>
        <h1>Registrarse</h1>
        <SignUpForm /> 
    </div>
  );

const initial_state= {
    user_name: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};  

function SignUpFormBase (props) {

    const dispatch= useDispatch();

    var [state, setState] = useState(initial_state)

    const onSubmitHandler = async (e) => {
        const { user_name, first_name, last_name, email, passwordOne, province, city, street, number } = state;

        e.preventDefault();

        try {
            var authUser= await props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne);
            // console.log('authUser : ' + Object.keys(authUser))
            // console.log('user:  ' + Object.keys(authUser.user))
            // console.log('user.uid : '  + authUser.user.uid )
            // console.log('user.email : ' + authUser.user.email)
            // console.log('credential ' + authUser.credential)
            // console.log('additionalUserInfo : ' + Object.keys(authUser.additionalUserInfo) )
            // console.log('operationType:  ' + authUser.operationType)
            var userOk={
              id: authUser.user.uid, 
              user_name,
              first_name,
              last_name,
              email,
              address: province + ' - ' + city + ' - ' + street + ' - ' + number
            }
            dispatch(createUser(userOk))
            
            if(authUser!==undefined) {
                setState({...initial_state})
            props.history.push(ROUTES.SIGN_IN)
            }
            
        } catch (error) {

                  console.log('ESTE ES EL ERROR: ' + error.message)
            setState({...state,
                        error: error})

        }

    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        setState({ ...state,
            [e.target.name] : e.target.value } )
    }

    const {
        user_name,
        first_name,
        last_name,
        email,
        passwordOne,
        passwordTwo,
        province,
        city,
        street,
        number,
        error,
      } = state;

      const isInvalid =
      (passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      user_name === '');
        
    

    return (
        <form className='user-main' onSubmit={onSubmitHandler}>
            <input
          name="user_name"
          value={user_name}
          onChange={onChangeHandler}
          type="text"
          placeholder="User Name"
        />
        <input
          name="first_name"
          value={first_name}
          onChange={onChangeHandler}
          type="text"
          placeholder="First Name"
        />
        <input
          name="last_name"
          value={last_name}
          onChange={onChangeHandler}
          type="text"
          placeholder="Last Name"
        />
        <input
          name="email"
          value={email}
          onChange={onChangeHandler}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={onChangeHandler}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={onChangeHandler}
          type="password"
          placeholder="Confirm Password"
        />
        <input
          name="province"
          value={province}
          onChange={onChangeHandler}
          type="text"
          placeholder="provincia"
        />
        <input
          name="city"
          value={city}
          onChange={onChangeHandler}
          type="text"
          placeholder="ciudad"
        />
        <input
          name="street"
          value={street}
          onChange={onChangeHandler}
          type="text"
          placeholder="calle"
        />
        <input
          name="number"
          value={number}
          onChange={onChangeHandler}
          type="text"
          placeholder="numero de calle"
        />
        <button disabled={isInvalid} type="submit">Sign Up</button>

        
            {error && <p className='danger'>{error.message}</p>}
        
        </form>
    )

}

const SignUpLink = () => {
    return (<p> Don´t have an Account? 
        <br/>  
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>)
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);

export default SignUpPage;
export {SignUpForm, SignUpLink};