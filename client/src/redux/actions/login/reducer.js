import * as TYPES from "../types";

const initialState = {
    authUser: 'guest',
  };

const loginReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.LOG_IN_USER: {
            return {...state, 
                    authUser: action.payload}
        }
        default:                  return state;
    }
}

export default loginReducer; 
