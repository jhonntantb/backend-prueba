import axios from "axios"
import * as TYPES from "../types"

export const getCart = (id = null) => {
    return async (dispatch) => {
        var cart = []
        if(id)
        {
            var res = await axios.get("http://localhost:3001/order?status=cart&userId=" + id).data
            cart = res ? res : []
        }
        else
        {
            var lsCart = JSON.parse(localStorage.getItem("cart"))
            cart = lsCart.length > 0 ? lsCart : [] 
        }
        
        return dispatch({ type: TYPES.GET_CART, payload: cart})
    }
}