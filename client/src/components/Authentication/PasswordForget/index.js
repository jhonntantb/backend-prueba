import { withFirebase } from '../../FireBase';
import * as ROUTES from '../../../routes';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

function PasswordForgetFormBase (props) {
    const [state, setState] = useState(INITIAL_STATE)


    const onSubmit = event => {
        const { email } = state;
    
        props.firebase
          .doPasswordReset(email)
          .then(() => {
            setState({ ...INITIAL_STATE });
          })
          .catch(error => {
            setState({ error });
          });
    
        event.preventDefault();
      };
    
    const  onChange = event => {
        setState({ [event.target.name]: event.target.value });
      };

    const { email, error } = state;

    const isInvalid = email === '';

    return (
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={state.email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
}

const PasswordForgetLink = () => (
    <p>
      <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
  );
  
  export default PasswordForgetPage;
  
  const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
  
  export { PasswordForgetForm, PasswordForgetLink };