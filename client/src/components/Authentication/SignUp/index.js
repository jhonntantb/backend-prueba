import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { compose } from 'recompose';

import { withFirebase } from '../../FireBase';
import * as ROUTES from '../../../routes';

import { createUser } from '../../../redux/actions/user/index';

import './index.css';
import { Alert } from 'reactstrap';



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


  const dispatch = useDispatch();


  var [state, setState] = useState(initial_state)

  const onSubmitHandler = async (e) => {

    const { user_name, first_name, last_name, email, passwordOne, province, city, street, number } = state;


    e.preventDefault();

    try {
      var authUser = await props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne);
      // console.log('authUser : ' + Object.keys(authUser))
      // console.log('user:  ' + Object.keys(authUser.user))
      // console.log('user.uid : '  + authUser.user.uid )
      // console.log('user.email : ' + authUser.user.email)
      // console.log('credential ' + authUser.credential)
      // console.log('additionalUserInfo : ' + Object.keys(authUser.additionalUserInfo) )
      // console.log('operationType:  ' + authUser.operationType)

      var userOk = {
        id: authUser.user.uid,
        user_name,
        first_name,
        last_name,
        email,
        address: province + ' - ' + city + ' - ' + street + ' - ' + number
      }
      dispatch(createUser(userOk))

      if (authUser !== undefined) {
        setState({ ...initial_state })
        props.history.push(ROUTES.SIGN_IN)

      }

    } catch (error) {

      console.log('ESTE ES EL ERROR: ' + error.message)
      setState({
        ...state,
        error: error
      })

    }

  }

  const onChangeHandler = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
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
    <div className="container mt-5">
      <div className="row content d-flex justify-content-center">
        <div className="col-md-5">
          <div className="box shadow bg-white p-4">
            <h3 className="mb-4 text-center fs-1">Sing Up</h3>
            <form className='user-main mb-3' onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <input
                  name="user_name"
                  value={user_name}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="User Name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="first_name"
                  value={first_name}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="last_name"
                  value={last_name}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="email"
                  value={email}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Email Address"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="passwordOne"
                  value={passwordOne}
                  onChange={onChangeHandler}
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={onChangeHandler}
                  type="password"
                  placeholder="Confirm Password"
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
  return (<p> Don´t have an Account?
    <br />
    <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>)
}

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };