import {profielAPI} from "../api/api"
const ADD_POST = "profile/ADD-POST";
const SET_USERS_PROFILE = "profile/SET-USERS-PROFILE"
const SET_STATUS = "profile/SET-STATUS"
const DELETE_POST = "profile/DELETE-POST"

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
                posts: state.posts.filter(p => p.id != action.id)
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

export const setUserProfileThunk = (id) => {
    return async (dispatch) => {
        let data = await profielAPI.getProfile(id);
        dispatch(setUsersProfile(data));
    }
}

export const getStatusThunk = (id) => {
    return async (dispatch) => {
        let data = await profielAPI.getStatus(id);
        dispatch(setStatus(data));
    }
}

export const updateStatusThunk = (status) => {
    return async (dispatch) => {
        let data = await profielAPI.updateStatus(status);
        if(data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}


export default profileReducer;