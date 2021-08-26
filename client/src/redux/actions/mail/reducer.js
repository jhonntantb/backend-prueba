import * as TYPES from "../types";

const initialState = {
    sentMail:[],
    responseMail:[],
  };

const mailReducer = (state = initialState, action) => {
    switch (action.type) { 
        case TYPES.LOW_STOCK_EMAIL: return{
            ...state,
            sentMail:action.payload
        }
        case TYPES.ACCOUNT_CONFIRMATION_EMAIL: return{
            ...state,
            sentMail:action.payload
        }
        case TYPES.ORDER_STATUS_EMAIL: return{
            ...state,
            sentMail:action.payload
        }
        default:                  return state;
    }
}

export default mailReducer; 