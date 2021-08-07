import axios from 'axios';
import * as TYPES from "../types"

export const createBundle = (bundle) => {
    return async (dispatch) => {
        const json = await axios.post('http://localhost:3001/bundle', bundle)
        return dispatch({ type: TYPES.CREATE_BUNDLE, payload: json.data })
    }
}

export const updateBundle = (params) => {
    return async (dispatch) => {
        const json = await axios.post('http://localhost:3001/bundle', params)
        return dispatch({ type: TYPES.UPDATE_BUNDLE, payload: json.data })
    }
}

export const getBundle = (id) => {
    return async (dispatch) => {
        const json = await axios.post('http://localhost:3001/bundle/' + id)
        return dispatch({ type: TYPES.GET_BUNDLE, payload: json.data })
    }
}

export const getAllBundle = () => {
    return async (dispatch) => {
        const json = await axios.post('http://localhost:3001/bundle')
        return dispatch({ type: TYPES.GET_ALL_BUNDLE, payload: json.data })
    }
}

export const deleteBundle = (params) => {
    return async (dispatch) => {
        const json = await axios.delete('http://localhost:3001/bundle', params)
        return dispatch({ type: TYPES.DELETE_BUNDLE, payload: json.data })
    }
}