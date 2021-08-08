import { withFirebase } from '../../FireBase';
import * as ROUTES from '../../../routes';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

function PasswordForgetFormBase(props) {
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

  const onChange = event => {
    setState({ [event.target.name]: event.target.value });
  };

  const { email, error } = state;

  const isInvalid = email === '';

  return (
    <div className="container mt-5">
      <div className="row content d-flex justify-content-center">
        <div className="col-md-5">
          <div className="box shadow bg-white p-4">
            <h3 className="mb-4 text-center fs-1">Forgot your password?</h3>
            <form className="mb-3" onSubmit={onSubmit}>
              <div className="form-floating mb-3">
                <input
                  name="email"
                  value={state.email}
                  onChange={onChange}
                  type="text"
                  placeholder="Email Address"
                  className="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput">Type your email</label>
              </div>
              <div className="d-grip gap-2 mb-3 text-center">
                <button className="btn btn-dark btn-lg border-0 rounded-0" disabled={isInvalid} type="submit">
                  Reset My Password
                </button>
              </div>

              {error && <p className="text-danger text-center">{error.message}</p>}
            </form>
          </div>

        </div>
      </div>
    </div>
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