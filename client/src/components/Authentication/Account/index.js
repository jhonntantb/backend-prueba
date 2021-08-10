import React from 'react';
import { NavLink } from 'react-router-dom';

import { PasswordForgetLink } from '../PasswordForget/index';
import * as ROUTES from '../../../constants/routes';

function AccountPage() {
  return (
    <div className="container text-center mt-3">

      <h1>Account Page</h1>
      <ul>
        <li>
          <PasswordForgetLink />
        </li>
        <li>
          <NavLink className="text-dark" to={ROUTES.PASSWORD_CHANGE} >Cambiar mi Contraseña</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AccountPage;