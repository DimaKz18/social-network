const ADD_MESSAGE = "dialogs/ADD-MESSAGE";

let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 10, message: action.newMessage}],
            };
        }
        default:
            return state;
    }
}

export const addMessage = (newMessage) => {
    return {
      type: ADD_MESSAGE,
      newMessage
    }
}

export default dialogsReducer;