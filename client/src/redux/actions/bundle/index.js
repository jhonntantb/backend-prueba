import axios from 'axios';
import * as TYPES from "../types"

export const createBundle = (bundle) => {
    return async (dispatch) => {
        const res = await axios.post('/bundle', bundle)
        return dispatch({ type: TYPES.CREATE_BUNDLE, payload: res.data })
    }
}

export const updateBundle = (params) => {
    return async (dispatch) => {
        const res = await axios.put('/bundle', params)
        return dispatch({ type: TYPES.UPDATE_BUNDLE, payload: res.data })
    }
}

export const getBundle = (id) => {
    return async (dispatch) => {
        const res = await axios.get('/bundle/' + id)
        return dispatch({ type: TYPES.GET_BUNDLE, payload: res.data })
    }
}

export const getAllBundle = () => {
    return async (dispatch) => {
        const res = await axios.get('/bundle')
        return dispatch({ type: TYPES.GET_ALL_BUNDLE, payload: res.data })
    }
}

export const deleteBundle = (params) => {
    return async (dispatch) => {
        const res = await axios.delete('/bundle', params)
        return dispatch({ type: TYPES.DELETE_BUNDLE, payload: res.data })
    }
}