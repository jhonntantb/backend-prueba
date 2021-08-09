import React, { useState } from 'react';
import { withFirebase } from '../../FireBase/index';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

function PasswordChangeForm(props) {
  const [state, setState] = useState(INITIAL_STATE)


  const onSubmit = event => {
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
    console.log('isInvalid? ' + isInvalid)
  };



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
          className={"danger"&&isInvalid}
          name="passwordTwo"
          value={passwordTwo}
          onChange={onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

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


export default withFirebase(PasswordChangeForm);

export { PasswordChangeForm };