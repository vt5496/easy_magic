import React from "react";

import {authorizationActionCreator, readNewLoginTextActionCreator} from "../../redux/authorization-reducer";
import {readNewPasswordTextActionCreator} from "../../redux/authorization-reducer";

import s from './authorization.module.css'
import {NavLink} from "react-router-dom";

const Authorization = (props) => {

    let newLoginElement = React.createRef();
    let readNewLoginText = () => {
        let text = newLoginElement.current.value;
        props.dispatch(readNewLoginTextActionCreator(text));
    };
    let newLoginTextValue = props.authorization.login;

    let newPasswordElement = React.createRef();
    let readNewPasswordText = () => {
        let text = newPasswordElement.current.value;
        props.dispatch(readNewPasswordTextActionCreator(text));
    };
    let newPasswordTextValue = props.authorization.password;

    let authorizationButton = (event) => {event.preventDefault(); return props.dispatch(authorizationActionCreator(props))}


    return (
        <div className={s.main}>
            <form className={s.form} action="">
                <h2>Authorization</h2>

                <span>Login</span>
                <input ref={newLoginElement} onChange={readNewLoginText} type="text" value={newLoginTextValue}/>

                <span>Password</span>
                <input ref={newPasswordElement} onChange={readNewPasswordText} type="password"
                       value={newPasswordTextValue}/>


                    <button onClick={authorizationButton}><NavLink className={s.link} exact to="/home">Sign in</NavLink></button>

            </form>
        </div>
    )
}

export default Authorization;