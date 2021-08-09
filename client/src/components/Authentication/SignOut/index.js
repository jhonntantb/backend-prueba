import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { useDispatch } from 'react-redux';

import { withFirebase } from '../../FireBase/context';
import { LogInUser } from '../../../redux/actions/login/index';

function LogOutButton() {
  return (
    <SignOutButton />
  )
}


function SignOutButtonBase(props) {
  //const dispatch = useDispatch();

  function clickHandler() {
    console.log('hiciste click')
    try {
      props.firebase.doSignOut();
      // sessionStorage.clear()
      sessionStorage.setItem("pg_merceria", "guest")
      //dispatch(LogInUser('guest'))
      props.history.push('/')
    } catch (error) {
      console.log(error.message);
    }

  }

  return (

    <button type="button" onClick={clickHandler} className="btn btn-danger">

      Log Out
    </button>
  );
}

const SignOutButton = compose(
  withRouter,
  withFirebase,
)(SignOutButtonBase);

export default LogOutButton;
export { SignOutButton }
// export default withFirebase(SignOutButton);


// export function SignOutButton  ({ firebase }) {
//     return (<button type="button" onClick={firebase.doSignOut}>
//     Sign Out
//   </button>)

// }



// export default withFirebase(SignOutButton);

// export {SignOutButton};