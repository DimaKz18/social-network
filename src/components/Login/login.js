import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import '../FormControls/FormControls.css'
import './login.css'

const LoginForm = (props) => {
    return (
        <form className='login-form' onSubmit={props.handleSubmit}>
            <div>
                <Field className='login-form-input' placeholder='email' name='email' component='input' />
            </div>
            <div>
                <Field className='login-form-input' placeholder='password' name='password' component='input' type='password' />
            </div>
            <div>
                <Field className='login-form-checkbox' type='checkbox' name='rememberMe' component='input'/>
                <span className='login-form-text'>Remember me</span>
            </div>
            {props.error && <div className='text-error'>{props.error}</div>} 
            <div>
                <button className='login-form-btn'>Login</button>
            </div>
            {props.captchaUrl && <div>
                <div>
                    <img src={props.captchaUrl} alt=''></img>
                </div>
                <div>
                    <Field placeholder='Enter captcha' name='captcha' component='input' />
                </div>
            </div>}
        </form>
    )
    
}

const ReduxLoginForm = reduxForm ({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if(props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div className='login-content'>
            <h1>Login please to enter your page</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, {login})(Login);