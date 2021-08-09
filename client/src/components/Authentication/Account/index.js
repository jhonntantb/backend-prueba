import React from 'react';
import { NavLink } from 'react-router-dom';

import { PasswordForgetLink } from '../PasswordForget/index';
import { PasswordChangeLink } from '../PasswordChange';
import * as ROUTES from '../../../constants/routes';

function AccountPage  () {
    return (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetLink />
    <PasswordChangeLink/>
  </div>
);}

export default AccountPage;