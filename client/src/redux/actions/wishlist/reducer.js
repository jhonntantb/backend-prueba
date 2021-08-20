import * as TYPES from "../types";

const initialState = {
   wishlist:[],
  };

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.GET_ALL_WISHLIST: return{
            ...state,
            wishlist:action.payload   
        }
        case TYPES.CREATE_WISHLIST: return  {...state, wishlist: action.payload} 
        case TYPES.DELETE_WISHLIST: return state;
        default:                  return state;
    }
}

export default wishlistReducer;