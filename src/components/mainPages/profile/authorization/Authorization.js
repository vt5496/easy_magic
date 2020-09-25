import React from "react";

import s from './authorization.module.css'
import {Link} from "react-router-dom";

const Authorization = ({
                           sendLoginValueToState, sendPasswordValueToState,
                           authorization, fakeAuthorization,
                           loginValue, passwordValue, users
                       }) => {

    const loginInputRef = React.createRef();
    const passwordInputRef = React.createRef();
    const getRefValue = ref => ref.current.value;

    const getUser = (loginValue) => users.filter(user => user.login === loginValue)[0]

    const onReadLoginInput = () =>
        sendLoginValueToState(getRefValue(loginInputRef))
    const onReadPasswordInput = () =>
        sendPasswordValueToState(getRefValue(passwordInputRef))

    let onAuthorization = (e) => {
        e.preventDefault();
        return (getUser(loginValue)) ?
            (getUser(loginValue).password === passwordInputRef) ?
                authorization({loginValue, passwordInputRef}, getUser(loginValue))
                : fakeAuthorization() : fakeAuthorization()
    }

    return (
        <div className={s.main}>
            <form onSubmit={onAuthorization} className={s.form}>
                <h2>Authorization</h2>

                <span>Login</span>
                <input ref={loginInputRef} onChange={onReadLoginInput} type="text"
                       value={loginValue}/>

                <span>Password</span>
                <input ref={passwordInputRef} onChange={onReadPasswordInput} type="password"
                       value={passwordValue}/>

                <button><Link className={s.link} exact to="/home">Sign in</Link>
                </button>

            </form>
        </div>
    )
}

export default Authorization;