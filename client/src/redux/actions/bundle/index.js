import axios from 'axios';
import * as TYPES from "../types"

export const createBundle = (bundle) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:3001/bundle', bundle)
        return dispatch({ type: TYPES.CREATE_BUNDLE, payload: res.data })
    }
}

export const updateBundle = (params) => {
    return async (dispatch) => {
        const res = await axios.put('http://localhost:3001/bundle', params)
        return dispatch({ type: TYPES.UPDATE_BUNDLE, payload: res.data })
    }
}

export const getBundle = (id) => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/bundle/' + id)
        return dispatch({ type: TYPES.GET_BUNDLE, payload: res.data })
    }
}

export const getAllBundle = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/bundle')
        return dispatch({ type: TYPES.GET_ALL_BUNDLE, payload: res.data })
    }
}

export const deleteBundle = (params) => {
    return async (dispatch) => {
        const res = await axios.delete('http://localhost:3001/bundle', params)
        return dispatch({ type: TYPES.DELETE_BUNDLE, payload: res.data })
    }
}