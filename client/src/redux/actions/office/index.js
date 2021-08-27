import axios from 'axios';
import * as TYPES from "../types"

export const createOffice = (office) => {
    return async (dispatch) => {
        const res = await axios.post('/office', office)
        return dispatch({ type: TYPES.CREATE_OFFICE, payload: res.data })
    }
}

export const updateOffice= (params) => {
    return async (dispatch) => {
        const res = await axios.put('/office', params)
        return dispatch({ type: TYPES.UPDATE_OFFICE, payload: res.data })
    }
}

export const getOffice= (id) => {
    return async (dispatch) => {
        const res = await axios.get('/office/' + id)
        return dispatch({ type: TYPES.GET_OFFICE, payload: res.data })
    }
}

export const getAllOffice = () => {
    return async (dispatch) => {
        const res = await axios.get('/office')
        return dispatch({ type: TYPES.GET_ALL_OFFICE, payload: res.data })
    }
}

export const deleteOffice = (id) => {
    return async (dispatch) => {
        const res = await axios.delete('/office/'+ id)
        return dispatch({ type: TYPES.DELETE_OFFICE, payload: res.data })
    }
}