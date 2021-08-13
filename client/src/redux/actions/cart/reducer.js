import * as TYPES from "../types";

const initialState = {
    cart: [],
  };

const cartReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.GET_CART: return{
            ...state,
            cart: action.payload
        }
        
        default:                  return state;
    }
}

export default cartReducer;