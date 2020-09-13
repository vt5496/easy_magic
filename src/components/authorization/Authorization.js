import React from "react";

import s from './authorization.module.css'
import {Link} from "react-router-dom";

const Authorization = ({
                           readNewLoginText, readNewPasswordText,
                           authorization, fakeAuthorization,
                           login, password, users
                       }) => {

    let newLoginElement = React.createRef();
    let newPasswordElement = React.createRef();

    let newLoginTextValue = login;
    let newPasswordTextValue = password;

    let onReadNewLoginText = () => {
        let text = newLoginElement.current.value;
        readNewLoginText(text)
    };

    let onReadNewPasswordText = () => {
        let text = newPasswordElement.current.value;
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
                <input ref={newLoginElement} onChange={onReadNewLoginText} type="text" value={newLoginTextValue}/>

                <span>Password</span>
                <input ref={newPasswordElement} onChange={onReadNewPasswordText} type="password"
                       value={newPasswordTextValue}/>


                <button onClick={authorizationButton}><Link className={s.link} exact to="/home">Sign in</Link>
                </button>

            </form>
        </div>
    )
}

export default Authorization;