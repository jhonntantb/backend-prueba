import axios from 'axios';
import * as TYPES from "../types"


export const getAllCategory = () => {
    return async  (dispatch) => {
        let res = await axios.get('http://localhost:3001/category')
        return dispatch({ type: TYPES.GET_ALL_CATEGORY, payload: res.data })
    }
}

export const getCategory = (id) => {
    return async  (dispatch) => {
        let res = await axios.get('http://localhost:3001/category/' + id)
        return dispatch({ type: TYPES.GET_CATEGORY, payload: res.data })
    }
}

export const postCategory = (name) => {
    return async  (dispatch) => {
        let res = await axios.post('http://localhost:3001/category?name='+ name)
        return dispatch({ type: TYPES.CREATE_CATEGORY, payload: res.data })
    }
}

export const deleteCategory = (id) => {
    return async  (dispatch) => {
        let res = await axios.delete('http://localhost:3001/category/' + id)
        return dispatch({ type: TYPES.DELETE_CATEGORY })
    }
}

export const updateCategory = (id) => {
    return async  (dispatch) => {
        let res = await axios.put('http://localhost:3001/category', id)
        return dispatch({ type: TYPES.UPDATE_CATEGORY, payload: res.data })
    }
}
