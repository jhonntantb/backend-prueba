import { combineReducers } from 'redux';
import bundleReducer from '../actions/bundle/reducer';
import categoryReducer from '../actions/category/reducer';
import loginReducer from '../actions/login/reducer';
import officeReducer from '../actions/office/reducer';
import orderReducer from '../actions/order/reducer';
import productReducer from '../actions/product/reducer';
import reviewReducer from '../actions/review/reducer';
import stockReducer from '../actions/stock/reducer';
import userReducer from '../actions/user/reducer';
import checkoutReducer from '../actions/checkout/reducer';

const rootReducer = combineReducers(
    {
        bundleReducer,
        categoryReducer,
        loginReducer,
        officeReducer,
        orderReducer,
        productReducer,
        reviewReducer,
        stockReducer,
        userReducer,
        checkoutReducer
    }
);

export default rootReducer;
