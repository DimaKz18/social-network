import {applyMiddleware, combineReducers, createStore} from 'redux'
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import appReducer from './app-reducer'
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;