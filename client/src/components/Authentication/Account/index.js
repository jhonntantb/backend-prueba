import React from 'react';
import { NavLink } from 'react-router-dom';

import { PasswordForgetLink } from '../PasswordForget/index';
import {ROUTES} from '../../../constants/routes';

function AccountPage  () {
    return (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetLink />
    <NavLink to={ROUTES.PASSWORD_CHANGE} >Cambiar mi Contraseña</NavLink>
  </div>
);}

export default AccountPage;