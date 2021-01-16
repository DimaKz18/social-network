import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import "./Dialogs.css";
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../validators/validators';
import { Textarea } from '../FormControls/FormControls';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map( d => <Dialog user={d.dialog} id={d.id} />);
  let messagesElements = props.dialogsPage.messages.map( m => <Message msg={m.message} id={m.id} />);

  let onAddDialog = (values) => {
    props.addDialog(values.newMessage);
  }

  return (
    <div className="dialogs-content">
      <div className="dialogs">
        {dialogsElements}
      </div>
      <div className="messages">
        {messagesElements}
        <AddMessageFormRedux onSubmit={onAddDialog}/>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Enter your message' name='newMessage' component={Textarea} validate={[requiredField, maxLength50]} />
      </div>
      <div>
        <button>Add Dialog</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm ({form: 'addMessage'})(AddMessageForm);

export default Dialogs;
