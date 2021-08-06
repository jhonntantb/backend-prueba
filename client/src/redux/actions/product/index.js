import axios from 'axios';
import * as TYPES from "../types"


export const createProduct = (product) => {
    return  async (dispatch) => {
        const res = await axios.post('http://localhost:3001/product', product)
        return dispatch({ type: TYPES.CREATE_PRODUCT, payload: res.data })
    }
}

export const getProduct = (id) => {
    return async  (dispatch) => {
        const res = await axios.get('http://localhost:3001/product/' + id)
        return dispatch({ type: TYPES.GET_PRODUCT, payload: res.data })
    }
}


export const getAllProduct = () => {
        return async  (dispatch) => {
        const res = await axios.get('http://localhost:3001/product')
        console.log('valor res:', res)
        return dispatch({ type: TYPES.GET_ALL_PRODUCT, payload: res.data })
    }
}
// const res = await axios.get(`http://localhost:3001/product?name=${search}`)

export const updateProduct = (params) => {
    return async  (dispatch) => {
        const res = await axios.put('http://localhost:3001/product/', params)
        return dispatch({ type: TYPES.UPDATE_PRODUCT, payload: res.data })
    }
}


export const deleteProduct = (params) => {
    return async  (dispatch) => {
        const res = await axios.delete('http://localhost:3001/product', params)
        return dispatch({ type: TYPES.DELETE_PRODUCT, payload: res.data })
    }
}
