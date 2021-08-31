import axios from 'axios';
import * as TYPES from "../types"

export const createReview = (review) => {
    return async (dispatch) => {
        const res = await axios.post('/review', review)
        return dispatch({ type: TYPES.CREATE_REVIEW, payload: res.data })
    }
}

export const updateReview = (params) => {
    return async (dispatch) => {
        const res = await axios.put('/review', params)
        return dispatch({ type: TYPES.UPDATE_REVIEW, payload: res.data })
    }
}

export const getReview = (id) => {
    return async (dispatch) => {
        const res = await axios.get('/review/' + id)
        return dispatch({ type: TYPES.GET_REVIEW, payload: res.data })
    }
}

export const getAllReview = () => {
    return async (dispatch) => {
        const res = await axios.get('/review')
        return dispatch({ type: TYPES.GET_ALL_REVIEW, payload: res.data })
    }
}

export const deleteReview = (params) => {
    return async (dispatch) => {
        const res = await axios.delete('/review', params)
        return dispatch({ type: TYPES.DELETE_REVIEW, payload: res.data })
    }
}