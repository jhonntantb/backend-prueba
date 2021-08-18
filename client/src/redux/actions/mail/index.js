import axios from 'axios';
import * as TYPES from "../types"

export const sendEmailConfirmation = (user) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:3001/mail/user' , user)
        return dispatch({ type: TYPES.ACCOUNT_CONFIRMATION_EMAIL, payload: res.data })
    }
}

export const sendOrderStatusEmail = (user, order) => {
   var data ={user,order}
    return async (dispatch) => {
        const res = await axios.put('http://localhost:3001/mail/', data)
        return dispatch({type: TYPES.ORDER_STATUS_EMAIL, payload: res.data})
    }
}

export const sendOrderStatusEmail = (productId) => {
    
     return async (dispatch) => {
         const res = await axios.put('http://localhost:3001/mail/stock', productId)
         return dispatch({type: TYPES.LOW_STOCK_EMAIL, payload: res.data})
     }
 }

