import {authAPI} from "../api/api"
import {stopSubmit} from "redux-form"
const SET_USER_DATA = "auth/SET-USER-DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}

export const authUserThunk = () => {
    return async (dispatch) => {
        let data = await authAPI.setAuthUser();
        if(data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe);
        if(data.resultCode === 0) {
            dispatch(authUserThunk());
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("Login", {_error: message}))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if(data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export default authReducer;