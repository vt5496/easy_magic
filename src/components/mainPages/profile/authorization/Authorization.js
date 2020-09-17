import React from "react";

import s from './authorization.module.css'
import {Link} from "react-router-dom";

const Authorization = ({
                           readNewLoginText, readNewPasswordText,
                           authorization, fakeAuthorization,
                           login, password, users
                       }) => {

    let loginInputRef = React.createRef();
    let passwordInputRef = React.createRef();

    let loginInputValue = login;
    let passwordInputValue = password;

    let onReadNewLoginText = () => {
        let text = loginInputRef.current.value;
        readNewLoginText(text)
    };

    let onReadNewPasswordText = () => {
        let text = passwordInputRef.current.value;
        readNewPasswordText(text)
    };


    let authorizationButton = (e) => {
        e.preventDefault();
        let user = users.find(user => user.login === login)
        return (user) ?
            (user.password === password) ?
                authorization({login, password}, user)
                : fakeAuthorization() : fakeAuthorization()
    }

    return (
        <div className={s.main}>
            <form className={s.form} action="">
                <h2>Authorization</h2>

                <span>Login</span>
                <input ref={loginInputRef} onChange={onReadNewLoginText} type="text" value={loginInputValue}/>

                <span>Password</span>
                <input ref={passwordInputRef} onChange={onReadNewPasswordText} type="password"
                       value={passwordInputValue}/>


                <button onClick={authorizationButton}><Link className={s.link} exact to="/home">Sign in</Link>
                </button>

            </form>
        </div>
    )
}

export default Authorization;