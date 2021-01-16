import {usersAPI} from "../api/api"
const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS"
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "users/SET-TOTAL-COUNT"
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING = "users/TOGGLE-IS-FOLLOWING"

let initialState = {
    // users: [
    //     {id: 1, followed: true, fullName: "Dmitry", position: "Businessman", city: "Kiev", country: "Ukraine", img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    //     {id: 2, followed: true, fullName: "Dan", position: "Employe", city: "Los Angeles", country: "USA", img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    //     {id: 3, followed: false, fullName: "Jane", position: "Self-Employe", city: "New York", country: "USA", img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    // ],
    users: [],
    pageSize: 4,
    totalUsers: 20,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING: 
            return {
                ...state,
                followInProgress: action.isFetching ? [...state.followInProgress, action.userId] : state.followInProgress.filter(id => id!= action.userId),
                // isFetching: action.isFetching - показывать крутилку или нет
            }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
      type: FOLLOW,
      userId
    }
}

export const unfollow = (userId) => {
    return {
      type: UNFOLLOW,
      userId
    }
}

export const setUsers = (users) => {
    return {
      type: SET_USERS,
      users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
      type: SET_CURRENT_PAGE,
      currentPage
    }
}

export const setTotalUsers = (totalUsers) => {
    return {
      type: SET_TOTAL_COUNT,
      totalUsers: totalUsers
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const toggleIsFollowing = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFetching,
        userId
    }
}

export const getUsersThunk = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
        dispatch(toggleIsFetching(false));
    }
}

export const setCurrentPageThunk = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(page));
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(setUsers(data.items));
        dispatch(toggleIsFetching(false));
    }
}

export const followThunk = (userId) => {
    return async(dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        let data = await usersAPI.followUser(userId);
        if(data.resultCode === 0) {
            dispatch(follow(userId));
        }
        dispatch(toggleIsFollowing(false, userId));
        
    }
}

export const unfollowThunk = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowing(true, userId));
        let data = await usersAPI.unfollowUser(userId);
        if(data.resultCode === 0) {
            dispatch(unfollow(userId));
        }
        dispatch(toggleIsFollowing(false, userId));
    }
}

export default usersReducer;