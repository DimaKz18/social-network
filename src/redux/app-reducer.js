import { authUserThunk } from "./auth-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED-SUCCESS";

let initialState = {
    initialize: false
}
const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialize: true
            };
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
      type: INITIALIZED_SUCCESS,
    }
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(authUserThunk());
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess());
        })
    }
}

export default appReducer;