import axios from "axios"
import * as TYPES from "../types"

export const getCart = () => {
    return async (dispatch) => {
        var cart = JSON.parse(localStorage.getItem("cart"))
        
        return dispatch({ type: TYPES.GET_CART, payload: cart})
    }
}