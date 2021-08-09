import * as TYPES from "../types";

const initialState = {
    products: [],
    product:[],
  };

const productReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.GET_ALL_PRODUCT: 
        //console.log('estoy en reducer');
        //console.log(action.payload);
        return{
            ...state,
            products:action.payload   
        }
        case TYPES.GET_PRODUCT: return{
            ...state,
            product:action.payload   
        }
        case TYPES.CREATE_PRODUCT: return state
        case TYPES.UPDATE_PRODUCT: return state
        case TYPES.DELETE_PRODUCT: return state
        default:                  return state;
    }
}

export default productReducer; 