import * as TYPES from "../types";

const initialState = {
    newUser: 'guest',
  };

const userReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.GET_ALL_USER: return{
            ...state,
            users:action.payload   
        }
        case TYPES.GET_USER: return{
            ...state,
            user:action.payload   
        }
        case TYPES.CREATE_USER: return  {...state, newUser: action.payload} 
        case TYPES.UPDATE_USER: return state
        case TYPES.DELETE_USER: return state
        default:                  return state;
    }
}

export default userReducer;