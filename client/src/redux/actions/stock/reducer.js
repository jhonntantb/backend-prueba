import * as TYPES from "../types";

const initialState = {
    stocks:[],
    stock:[],
  };

const stockReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.GET_ALL_STOCK: return{
            ...state,
            stocks:action.payload
        }
        case TYPES.GET_STOCK: return{
            ...state,
            stock:action.payload
        }
        case TYPES.CREATE_STOCK: return state
        case TYPES.UPDATE_STOCK: return state
        case TYPES.DELETE_STOCK: return state
        default:                  return state;
    }
}

export default stockReducer; 