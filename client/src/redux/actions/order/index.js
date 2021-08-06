import axios from 'axios';
import * as TYPES from "../types"

export const createOrder = (order) => {
    return async (dispatch) => {
        const json = await axios.post('http://localhost:3001/order', order)
        return dispatch({ type: TYPES.CREATE_ORDER, payload: json.data })
    }
}

export const updateOrder = (params) => {
    return async (dispatch) => {
        const json = await axios.post('http://localhost:3001/order', params)
        return dispatch({ type: TYPES.UPDATE_ORDER, payload: json.data })
    }
}

export const getOrder = (id) => {
    return async (dispatch) => {
        const json = await axios.post('http://localhost:3001/order/' + id)
        return dispatch({ type: TYPES.GET_ORDER, payload: json.data })
    }
}

export const getAllOrder = () => {
    return async (dispatch) => {
        const json = await axios.post('http://localhost:3001/order')
        return dispatch({ type: TYPES.GET_ALL_ORDER, payload: json.data })
    }
}

export const deleteOrder = (params) => {
    return async (dispatch) => {
        const json = await axios.delete('http://localhost:3001/order', params)
        return dispatch({ type: TYPES.DELETE_ORDER, payload: json.data })
    }
}