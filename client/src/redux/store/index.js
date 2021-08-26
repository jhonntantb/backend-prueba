import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";

// const composeEnhancers = (typeof window !== 'undefined' && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || "noCompose";
// // const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
var composeEnhancers = null;

if(window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}
const ConfigureStore = () => {

    try {
        var initialState = localStorage.getItem("pg_merceria") ? {} : localStorage.setItem("pg_merceria", "guest");
    } catch (error) {
        console.log('getError', error)
    }
    const saver = (store) => next => action => {
        let stateToSave = store.getState();
        let authUser = stateToSave.authUser;
        localStorage.setItem("pg_merceria", JSON.stringify({ ...stateToSave }))
        return next(action);
    }

    if (composeEnhancers !== null) {

        return createStore(
            rootReducer, initialState,
            composeEnhancers(applyMiddleware(thunk))
        );
    } else {
        return createStore(
            rootReducer, initialState,
            applyMiddleware(thunk)
        );
    }

}

export default ConfigureStore;