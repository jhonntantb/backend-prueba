//dependencies
import React from 'react';
import { Route } from 'react-router-dom';
import * as ROUTES from './routes';
import { PASSWORD_CHANGE } from './constants/routes';
//views
import Home from './views/Home/Home';
import Product from './views/Product/Product';
import ProductCreation from './views/ProductCreation/ProductCreation';

//components
import SignUpPage from './components/Authentication/SignUp/index';
import SignInPage from './components/Authentication/SignIn';
import Account from './components/Authentication/Account';
import PasswordForgetPage from './components/Authentication/PasswordForget';
import {PasswordChangeForm} from './components/Authentication/PasswordChange';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList/ProductList';
import Login from './components/Login/Login'
import Navbar from './components/Nav/Navbar';

import Form from './components/Admin/FormDetail/FormCategory';


function App() {
  return (
    <React.Fragment>
      <Route path="/" component={Navbar} />
      <Route exact path='/' component={Navigation} />
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={PASSWORD_CHANGE} component={PasswordChangeForm} />
      <Route path={ROUTES.ACCOUNT} component={Account} />
      <Route path={ROUTES.PRODUCTS} component={ProductList} />
      <Route path={ROUTES.PRODUCT} component={Product} />
      <Route exact path='/' component={Home} />
      <Route path={ROUTES.FORM} component={Form} />
      <Route path='/productcreation' component={ProductCreation} />
      <Route path='/login' component={Login} />
    </React.Fragment>
  )
}

export default App
