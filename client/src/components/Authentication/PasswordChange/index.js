import React, { useState } from 'react';
import { withFirebase } from '../../FireBase/index';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

function PasswordChangeForm (props) {
  const [state, setState] = useState(INITIAL_STATE)


const  onSubmit = event => {
    const { passwordOne } = state;

    props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
          //aqui debe ir el dispatch al back con la actuaizacion del PW
        setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        setState({ error });
      });

    event.preventDefault();
  };

 const onChange = event => {
    setState({ [event.target.name]: event.target.value });
  };

  
    const { passwordOne, passwordTwo, error } = state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={onChange}
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }


export default withFirebase(PasswordChangeForm);

export {PasswordChangeForm};