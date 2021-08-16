import React from 'react';
import { Route } from 'react-router-dom';
import * as ROUTES from './routes';
import { PASSWORD_CHANGE } from './constants/routes';
//views
import Home from './views/Home/Home';
import ShopCart from './views/ShopCart/ShopCart';
import Product from './views/Product/Product';
import ProductCreation from './views/ProductCreation/ProductCreation';
import ProductUpdate from './views/ProductCreation/ProductUpdate';
import Landing from './views/Landing/Landing';

//components
import SignUpPage from './components/Authentication/SignUp/index';
import SignInPage from './components/Authentication/SignIn';
import Account from './components/Authentication/Account';
import PasswordForgetPage from './components/Authentication/PasswordForget';
import PasswordChangePage from './components/Authentication/PasswordChange';
import ProductList from './components/ProductList/ProductList';
import Navbar from './components/Nav/Navbar';
import Form from './components/Admin/FormDetail/FormCategory';
import Stock from './components/Admin/Stock/Stock.jsx';
import UsersAdmin from './components/Admin/Users/index';
import AboutUs from './components/AboutUs/AboutUs'
import CartForm from './views/CartForm/CartForm';
import CreateCheckoutButton from './components/MPago/index';
import NavAdmin from './components/Admin/NavAdmin/NavAdmin';
import Order from './components/Admin/Order/Order';
import OrderDetail from './components/Admin/Order/OrderDetail';
import AfterCheckout from './components/MPago/afterCheckout';
import AfterCheckoutRejected from './components/MPago/afterCheckout-reject';
import Shopping from './components/UserShop/Shopping';


function App() {
  return (
    <React.Fragment>
      <Route path="/" component={Navbar} />
      <Route exact path='/' component={Landing} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.ACCOUNT} component={Account} />
      <Route path={ROUTES.PRODUCTS} component={ProductList} />
      <Route path={ROUTES.PRODUCT} component={Product} />
      <Route exact path={ROUTES.CART} component={ShopCart} />
      <Route path={ROUTES.CART_ORDER} component={CartForm} />
      <Route path={ROUTES.FORM} component={Form} />
      <Route path='/productcreation' component={ProductCreation} />
      <Route path='/productupdate/:id' component={ProductUpdate} />
      <Route path={ROUTES.MANAGE_USERS} component={UsersAdmin}/>
      <Route path='/pagar' component={CreateCheckoutButton}/>
      <Route path='/after-checkout' component={AfterCheckout}/>
      <Route path='/after-checkout-reject' component={AfterCheckoutRejected}/>
      <Route path={ROUTES.NAV_ADMIN} component={NavAdmin} />
      <Route exact path= {ROUTES.STOCK} component={Stock}/>
      <Route exact path={ROUTES.ADMIN_ORDERS} component={Order}/>
      <Route path={ROUTES.ADMIN_ORDER_DETAIL} exact component={OrderDetail}/> 
      <Route path={ROUTES.USER_SHOP} exact component={Shopping}/>
    </React.Fragment>
  )
}

export default App