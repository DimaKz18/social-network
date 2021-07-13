import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addNote, deleteNote, updateNote } from "../../redux/notes-reducer";
import Notes from './Notes'

let mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default compose(connect(mapStateToProps, {addNote, deleteNote, updateNote}))(Notes)