
import * as TYPES from "../types";

export const LogInUser = (mail) => {
    return function (dispatch) {
        return dispatch({type: TYPES.LOG_IN_USER, payload: mail})
    }
}

