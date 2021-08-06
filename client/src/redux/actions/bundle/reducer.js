import * as TYPES from "../types";

const initialState = {
    bundles:[],
    bundle:[],
  };

const bundleReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.GET_ALL_BUNDLE: return{
            ...state,
            bundles:action.payload
        }
        case TYPES.GET_BUNDLE: return{
            ...state,
            bundle:action.payload
        }
        case TYPES.CREATE_BUNDLE: return state
        case TYPES.UPDATE_BUNDLE: return state
        case TYPES.DELETE_BUNDLE: return state
        default:                  return state;
    }
}

export default bundleReducer; 