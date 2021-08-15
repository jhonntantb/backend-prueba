import * as TYPES from "../types"

export const getCart = () => {
    return (dispatch) => {
        return dispatch({ type: TYPES.GET_CART, payload: JSON.parse(localStorage.getItem("cart"))})
    }
}