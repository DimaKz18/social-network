import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Textarea} from '../../FormControls/FormControls'
import '../../FormControls/FormControls.css'

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Full Name' name='fullName' component='input' />
            </div>
            <div>
                <Field placeholder='About me' name='aboutMe' component='input' />
            </div>
            <div>
                <Field placeholder='Looking for a job' name='lookingForAJob' component='input'/>
            </div>
            <div>
                <Field placeholder='Status' name='lookingForAJobDescription' component={Textarea}/>
            </div>
            
            <div>
                {Object.keys(props.profile.contacts).map(key => {
                    return <div key={key}>
                        {key}: <Field placeholder={key} name={"contacts." + key} component='input'/>
                    </div>
                })}
            </div>
            {props.error && <div className='text-error'>{props.error}</div>} 
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}


const ReduxEditForm = reduxForm ({form: 'edit-profile'})(ProfileDataForm)

export default ReduxEditForm;
