import React from 'react';
import { NavLink } from 'react-router-dom';

import { PasswordForgetLink } from '../PasswordForget/index';
import { PasswordChangeLink } from '../PasswordChange';
import * as ROUTES from '../../../constants/routes';
import NotFound from '../../../views/NotFound/NotFound';

function AccountPage() {
  var authUser = localStorage.getItem("pg_merceria")
  return authUser!=='guest'?(
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
  ):<NotFound/>;
}

export default AccountPage;