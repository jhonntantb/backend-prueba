import axios from "axios"
import * as TYPES from "../types"

export const getCart = (id = null) => {
    return async (dispatch) => {
        // var res = await axios.get("http://localhost:3001/order?status=cart&userId=" + id).data
        // res = res || []
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        return dispatch({ type: TYPES.GET_CART, payload: cart})
    }
}