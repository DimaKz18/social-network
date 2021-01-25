import {profileAPI} from "../api/api"
import {stopSubmit} from "redux-form"
const ADD_POST = "profile/ADD-POST";
const SET_USERS_PROFILE = "profile/SET-USERS-PROFILE"
const SET_STATUS = "profile/SET-STATUS"
const DELETE_POST = "profile/DELETE-POST"
const SAVE_PHOTO = "profile/SAVE-PHOTO"

let initialState = {
    posts: [
        {id: 1, msg: "Hi!", likes: 15, img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        {id: 2, msg: "Hello!", likes: 7, img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    ],
    postText: '',
    profile: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                msg: action.newPost,
                likes: 10,
                img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
            };
            return{
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        } 
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPost) => {
    return {
      type: ADD_POST,
      newPost
    }
}

export const deletePost = (id) => {
    return {
      type: DELETE_POST,
      id
    }
}

export const setUsersProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO,
        photos
    }
}

export const setUserProfileThunk = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id);
        dispatch(setUsersProfile(data));
    }
}

export const getStatusThunk = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(id);
        dispatch(setStatus(data));
    }
}

export const updateStatusThunk = (status) => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.updateStatus(status);
            if(data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        }
        catch(error) {
            alert("Some error occused");
        }
    }
}

export const savePhotoThunk = (file) => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(file);
        if(data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }
    }
}

export const saveProfileThunk = (profile) => {
    return async (dispatch, getState) => {
        let data = await profileAPI.saveProfile(profile);
        const userId = getState().auth.userId;
        if(data.resultCode === 0) {
            dispatch(setUserProfileThunk(userId));
        } else {
            dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
            return Promise.reject(data.messages[0]);
        }
    }
}

export default profileReducer;