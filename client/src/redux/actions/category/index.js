import axios from 'axios';
import * as TYPES from "../types"


export const getAllCategory = () => {
    return async (dispatch) => {
        const res = await axios.get('/category')
        return dispatch({ type: TYPES.GET_ALL_CATEGORY, payload: res.data })
    }
}

export const getCategory = (id) => {
    return async (dispatch) => {
        const res = await axios.get('/category/' + id)
        return dispatch({ type: TYPES.GET_CATEGORY, payload: res.data })
    }
}


export const postCategory = (name) => {
    return async (dispatch) => {
        const res = await axios.post('/category?name=' + name)
        return dispatch({ type: TYPES.CREATE_CATEGORY, payload: res.data })
    }
}




export function deleteCategory(id) {
    return async function (dispatch) {
        try {
            await axios.delete("/category/"+ id);
            return dispatch({type:TYPES.DELETE_CATEGORY})
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateCategory = (id) => {

    return async (dispatch) => {
        const res = await axios.put('/category/'+ id)
        return dispatch({ type: TYPES.UPDATE_CATEGORY, payload: res.data })
    }
}
export function SetCategoriesFiltradas(response){
    return(dispatch) => {

            dispatch({
                type:TYPES.SET_CATEGORY_FILTRADA,
                payload:response
            });

        } 
    }

