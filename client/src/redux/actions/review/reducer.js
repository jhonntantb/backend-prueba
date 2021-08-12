import * as TYPES from "../types";

const initialState = {
    reviews:[],
    review:[],
  };

const reviewReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.GET_ALL_REVIEW: return{
            ...state,
            reviews:action.payload
        }
        case TYPES.GET_REVIEW: return{
            ...state,
            review:action.payload
        }
        case TYPES.CREATE_REVIEW: return {...state,review: action.payload}
        case TYPES.UPDATE_REVIEW: return state
        case TYPES.DELETE_REVIEW: return state
        default:                  return state;
    }
}

export default reviewReducer; 