import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import '../FormControls/FormControls.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='email' name='email' component='input' />
            </div>
            <div>
                <Field placeholder='password' name='password' component='input' type='password' />
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component='input'/>Remember me
            </div>
            {props.error && <div className='text-error'>{props.error}</div>} 
            <div>
                <button>Login</button>
            </div>
        </form>
    )
    
}

const ReduxLoginForm = reduxForm ({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login);