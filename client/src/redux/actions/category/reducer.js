import * as TYPES from "../types";

const initialState = {
    categories: ["PINGO"],
    category:[],
    categoryFiltrada:["Todas"],
  };

const categoryReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.GET_ALL_CATEGORY: return{
            ...state,
            categories:action.payload
        }
        case TYPES.GET_CATEGORY: return{
            ...state,
            category:action.payload
        }
        case TYPES.SET_CATEGORY_FILTRADA: return{
            ...state,
            categoryFiltrada:action.payload
        }
        case TYPES.CREATE_CATEGORY: return state
        case TYPES.UPDATE_CATEGORY: return state
        case TYPES.DELETE_CATEGORY: return state
        
        default:                  return state;
    }
}

export default categoryReducer; 