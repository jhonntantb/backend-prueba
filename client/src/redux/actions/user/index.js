import axios from 'axios';
import * as TYPES from "../types"

export const createUser = (user) => {
    return async  (dispatch) => {
        const json = await axios.post('http://localhost:3001/user', user)
        return dispatch({ type: TYPES.CREATE_USER, payload: json.data })
    }
}

export const updateUser = (params) => {
    return async  (dispatch) => {
        const json = await axios.post('http://localhost:3001/user', params)
        return dispatch({ type: TYPES.UPDATE_USER, payload: json.data })
    }
}

export const getUser = (id) => {
    return async  (dispatch) => {
        const json = await axios.post('http://localhost:3001/user/' + id)
        return dispatch({ type: TYPES.GET_USER, payload: json.data })
    }
}

export const getAllUser = () => {
    return async  (dispatch) => {
        const json = await axios.post('http://localhost:3001/user')
        return dispatch({ type: TYPES.GET_ALL_USER, payload: json.data })
    }
}

export const deleteUser = (params) => {
    return async  (dispatch) => {
        const json = await axios.delete('http://localhost:3001/user', params)
        return dispatch({ type: TYPES.DELETE_USER, payload: json.data })
    }
}