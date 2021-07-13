const ADD_NOTE = "notes/ADD-NOTE";
const DELETE_NOTE = "notes/DELETE-NOTE"
const UPDATE_NOTE = "notes/UPDATE-NOTE"

let initialState = {
    notes: [
        {id: 1, noteMsg: "Test note"},
    ],
}

const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NOTE: {
            return {
                ...state,
                notes: [...state.notes, {id: state.notes.length + 1, noteMsg: action.newNote}]
            };
        }
        case DELETE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter(n => n.id !== action.noteId)
            };
        }
        case UPDATE_NOTE: {
            return {
                ...state,
                notes: state.notes.map(note => {
                    if(note.id === action.noteId) {
                        return {...note, noteMsg: action.noteMessage}
                    }
                    return note
                })
            }
        }
        default:
            return state;
    }
}

export const addNote = (newNote) => {
    return {
        type: ADD_NOTE,
        newNote
    }
}

export const deleteNote = (noteId) => {
    return {
      type: DELETE_NOTE,
      noteId
    }
}

export const updateNote = (noteId, noteMessage) => {
    return {
      type: UPDATE_NOTE,
      noteId,
      noteMessage
    }
}

export default notesReducer;