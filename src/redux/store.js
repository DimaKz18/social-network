import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {msg: "Hi!", likes: 15, img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
                {msg: "Hello!", likes: 7, img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            ],
            postText: '',
        },
        dialogsPage: {
            dialogs: [
                {dialog: "Dan", id: 1},
                {dialog: "Kate", id: 2},
                {dialog: "John", id: 3},
                {dialog: "Sam", id: 4},
                {dialog: "Mathew", id: 5},
            ],
            messages: [
                {message:"Hi", id: 1},
                {message:"Hello", id: 2},
                {message:"How are you", id: 3},
                {message:"What's up?", id: 4},
                {message:"Yoo Yoo", id: 5}
            ],
            messageText: '',
        },
    },
    _rerenderEntireTree () {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderEntireTree(this._state);
    }
}


export default store;