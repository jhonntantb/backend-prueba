import axios from 'axios';
import * as TYPES from "../types"

export const goToCheckout = (userId, products) => {
    return async (dispatch) => {
        const res = await axios.post(`/checkout/${userId}`, products)
        return dispatch({ type: TYPES.GO_TO_CHECKOUT, payload: res.data })
    }
}