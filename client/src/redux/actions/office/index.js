import axios from 'axios';
import * as TYPES from "../types"

export const createOffice = (office) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:3001/office', office)
        return dispatch({ type: TYPES.CREATE_OFFICE, payload: res.data })
    }
}

export const updateOffice= (params) => {
    return async (dispatch) => {
        const res = await axios.put('http://localhost:3001/office', params)
        return dispatch({ type: TYPES.UPDATE_OFFICE, payload: res.data })
    }
}

export const getOffice= (id) => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/office/' + id)
        return dispatch({ type: TYPES.GET_OFFICE, payload: res.data })
    }
}

export const getAllOffice = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/office')
        return dispatch({ type: TYPES.GET_ALL_OFFICE, payload: res.data })
    }
}

export const deleteOffice = (params) => {
    return async (dispatch) => {
        const res = await axios.delete('http://localhost:3001/office', params)
        return dispatch({ type: TYPES.DELETE_OFFICE, payload: res.data })
    }
}