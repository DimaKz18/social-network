import React, { useEffect, useState } from 'react'
import "./Note.css"

const Note = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [noteMessage, setNoteMessage] = useState(props.note)

    useEffect(() => {
        setNoteMessage(props.note)
    }, [props.note])

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateNote(props.id, noteMessage);
    };

    const onStatusChange = (e) => {
        setNoteMessage(e.currentTarget.value)
    };

    const onDeleteNote = (noteId) => {
        props.deleteNote(noteId);
    };
    
    return(
        <div className='notes'>
            {editMode ?
            <div>
                <input className='note-input' onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={noteMessage}></input>
            </div> : 
            <div className='note'>
                <div className="note__block" onClick={activateEditMode}>
                <span className="note__text">{noteMessage}</span>
                </div>
                <div>
                <button className='note-btn' onClick={() => {onDeleteNote(props.id)}}>Delete note</button>
                </div>
            </div>
            }
    </div>
    )
}

export default Note