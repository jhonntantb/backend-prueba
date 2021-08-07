import axios from 'axios';
import * as TYPES from "../types"


export const getAllStock = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/stock')
        return dispatch({ type: TYPES.GET_ALL_STOCK, payload: res.data })
    }
}

export const getStock = (id) => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/stock/' + id)
        return dispatch({ type: TYPES.GET_STOCK, payload: res.data })
    }
}

export const postStock = (stock) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:3001/stock', stock)
        return dispatch({ type: TYPES.CREATE_STOCK, payload: res.data })
    }
}

export const deleteStock = (params) => {
    return async (dispatch) => {
        const res = await axios.delete('http://localhost:3001/stock', params)
        return dispatch({ type: TYPES.DELETE_STOCK, payload: res.data })
    }
}

export const updateStock = (id) => {
    return async (dispatch) => {
        const res = await axios.put('http://localhost:3001/stock', id)
        return dispatch({ type: TYPES.UPDATE_STOCK, payload: res.data })
    }
}
