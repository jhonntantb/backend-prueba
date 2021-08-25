import * as TYPES from "../types"

export const getCart = (id = null) => {
    return async (dispatch) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        return dispatch({ type: TYPES.GET_CART, payload: cart})
    }
}