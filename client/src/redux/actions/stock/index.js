import axios from 'axios';
import * as TYPES from "../types"


export const getAllStock = () => {
    return async (dispatch) => {
        const res = await axios.get('/stock')
        return dispatch({ type: TYPES.GET_ALL_STOCK, payload: res.data })
    }
}

export const getStock = (id) => {
    return async (dispatch) => {
        const res = await axios.get('/stock/' + id)
        return dispatch({ type: TYPES.GET_STOCK, payload: res.data })
    }
}

export const postStock = (stock) => {
    return async (dispatch) => {
        const res = await axios.post('/stock', stock)
        return dispatch({ type: TYPES.CREATE_STOCK, payload: res.data })
    }
}

export const deleteStock = (params) => {
    return async (dispatch) => {
        const res = await axios.delete('/stock', params)
        return dispatch({ type: TYPES.DELETE_STOCK, payload: res.data })
    }
}

export const updateStock = (objetoconlarpropiedadchangesquetienearray) => {
    return async (dispatch) => {
        const res = await axios.put('/stock', objetoconlarpropiedadchangesquetienearray)
        return dispatch({ type: TYPES.UPDATE_STOCK, payload: res.data })
    }
}
