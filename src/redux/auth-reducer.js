import {authAPI, securityAPI} from "../api/api"
import {stopSubmit} from "redux-form"

const SET_USER_DATA = "auth/SET-USER-DATA";
const GET_CAPTCHA_URL = "auth/GET-CAPTCHA-URL"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
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

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL,
        data: {captchaUrl}
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

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha);
        if(data.resultCode === 0) {
            dispatch(authUserThunk());
        } else {
            if(data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
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

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const data = await securityAPI.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
}

export default authReducer;