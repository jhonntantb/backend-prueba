import * as TYPES from "../types"
import  axios  from 'axios';


export const getCart = (userId) => {
    return async (dispatch) => {
        let cart = {order: null, cartProducts: []}
        
        if (userId) {
            let res = await axios.get("http://localhost:3001/order?status=cart&userId=" + userId)
            cart = res.data.length>0 ? {order: res.data[0], cartProducts: res.data[0].products} : {order: null, cartProducts : []}
        }
        return dispatch({ type: TYPES.GET_CART, payload: cart})
    }
}

export const setLoading = (loading) => {
    return async (dispatch) => {
        return dispatch({ type: TYPES.SET_LOADING, payload: loading})
    }
}

export const addPrice = (newPrice) => {
    return async (dispatch) => {
        return dispatch({ type: TYPES.ADD_PRICE, payload: newPrice})
    }
}

export const removePrice = (productId) => {
    return async (dispatch) => {
        return dispatch({ type: TYPES.REMOVE_PRICE, payload: productId})
    }
}

export const clearCart = () => {
    return async (dispatch) => {
        return dispatch({ type: TYPES.CLEAR_CART})
    }
}
