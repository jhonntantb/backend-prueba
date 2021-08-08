import * as TYPES from "../types";

const initialState = {
    offices:["OFICINA LA GAROMPA"],
    office:[],
  };

const officeReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.GET_ALL_OFFICE: return{
            ...state,
            offices:action.payload
        }
        case TYPES.GET_OFFICE: return{
            ...state,
            office:action.payload
        }
        case TYPES.CREATE_OFFICE: return state
        case TYPES.UPDATE_OFFICE: return state
        case TYPES.DELETE_OFFICE: return state
        default:                  return state;
    }
}

export default officeReducer; 