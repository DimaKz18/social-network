import React from 'react'
import Note from "./Note/Note";
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../validators/validators';
import { Textarea } from '../FormControls/FormControls';
import "./Notes.css"


const maxLength50 = maxLengthCreator(50)

const Notes = (props) => {
    let notesElements = props.notes.notes.map(n => <Note key={n.id} note={n.noteMsg} id={n.id} deleteNote={props.deleteNote} updateNote={props.updateNote}/>)

    const onAddNote = (values) => {
        props.addNote(values.newNote)
    }

    return (
        <div className='notes-content'>
            <div>
                <AddNoteFormRedux onSubmit={onAddNote}/>
            </div>
            <div className='notes-elements'>
                {notesElements}
            </div>
        </div>
    )
}

const AddNoteForm = (props) => {
    return (
      <form className='note-form' onSubmit={props.handleSubmit}>
        <div className='note-form-fields'>
          <Field className='note-form-textarea' placeholder='Enter your note' name='newNote' component={Textarea} validate={[requiredField, maxLength50]} />
        </div>
        <div>
          <button className='form-btn'>Add Note</button>
        </div>
      </form>
    );
};
  
const AddNoteFormRedux = reduxForm ({form: 'addNote'})(AddNoteForm);  

export default Notes