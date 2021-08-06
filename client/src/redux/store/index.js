import { createStore, applyMiddleware} from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const ConfigureStore = () => {
    var initialState = {};
    try {
        initialState = sessionStorage.getItem("pg_merceria") ? JSON.parse(sessionStorage.getItem("pg_merceria")) : initialState;
    } catch (error) {
    console.log('getError', error)
    }
    const saver = (store) => next => action => {
    let stateToSave = store.getState();
    let authUser= stateToSave.authUser;
    sessionStorage.setItem("pg_merceria", JSON.stringify({ ...stateToSave }))
    return next(action);
    }

return createStore(
    rootReducer, initialState,
    composeEnhancers(applyMiddleware(thunk))
    );
}
    
export default ConfigureStore;