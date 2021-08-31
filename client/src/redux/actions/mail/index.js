import axios from 'axios';
import * as TYPES from "../types"

export const sendEmailConfirmation = (user) => {
    return async (dispatch) => {
        const res = await axios.post('/mail/user' , user)
        return dispatch({ type: TYPES.ACCOUNT_CONFIRMATION_EMAIL, payload: res.data })
    }
}

export const sendOrderStatusEmail = (userId, orderId) => {
   var data ={userId: userId, orderId: orderId}
    return async (dispatch) => {
        const res = await axios.post('/mail/order', data)
        return dispatch({type: TYPES.ORDER_STATUS_EMAIL, payload: res.data})
    }
}

export const sendLowStockEmail = (productId) => {
    
     return async (dispatch) => {
         const res = await axios.put('/mail/stock', productId)
         return dispatch({type: TYPES.LOW_STOCK_EMAIL, payload: res.data})
     }
 }



