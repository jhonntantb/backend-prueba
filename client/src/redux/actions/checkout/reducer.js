import * as TYPES from "../types";

const initialState = {
    MP_data: null,
    MP_response: null
  };

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.GO_TO_CHECKOUT: {
            return {...state, 
                    MP_data: action.payload}
        }
        default:                  return state;
    }
}

export default checkoutReducer; 