import React from "react";
import {Link} from "react-router-dom";

import s from './registration.module.css'


const Registration = ({
                          loginValue, passwordValue, emailValue,
                          nameValue, surnameValue, imgValue, numberValue,

                          readNewLoginRegText, readNewPasswordRegText,
                          readNewNameRegText, readNewSurnameRegText,
                          readNewEmailRegText, readNewNumberRegText,
                          readNewImgRegText,

                          reg, fakeReg
                      }) => {

    //create refs
    const nameInputRef = React.createRef()
    const surnameInputRef = React.createRef();
    const emailInputRef = React.createRef();
    const numberInputRef = React.createRef();
    const imgInputRef = React.createRef();
    const loginInputRef = React.createRef();
    const passwordInputRef = React.createRef();

    const getRefValue = ref => ref.current.value


    //f dispatch
    const onReadNameInput = () =>
        readNewNameRegText(getRefValue(nameInputRef))
    const onReadSurnameInput = () =>
        readNewSurnameRegText(getRefValue(surnameInputRef))
    const onReadEmailInput = () =>
        readNewEmailRegText(getRefValue(emailInputRef))
    const onReadNumberInput = () =>
        readNewNumberRegText(getRefValue(numberInputRef))
    const onReadImgInput = () =>
        readNewImgRegText(getRefValue(imgInputRef))
    const onReadLoginInput = () =>
        readNewLoginRegText(getRefValue(loginInputRef))
    const onReadPasswordInput = () =>
        readNewPasswordRegText(getRefValue(passwordInputRef))

    const registrationButton = e => {
        e.preventDefault();
        (loginValue && passwordValue && emailValue && nameValue &&
            surnameValue && imgValue && numberValue) ?
            reg(loginValue, passwordValue, emailValue,
                nameValue, surnameValue,
                imgValue, numberValue) :
            fakeReg()
    }

    return (
        <div className={s.main}>
            <form onSubmit={registrationButton} className={s.form}>
                <h2>Registration</h2>

                <span>Name</span>
                <input ref={nameInputRef} onChange={onReadNameInput}
                       value={nameValue} type="text"/>

                <span>Surname</span>
                <input ref={surnameInputRef} onChange={onReadSurnameInput}
                       value={surnameValue} type="text"/>

                <span>Email</span>
                <input ref={emailInputRef} onChange={onReadEmailInput}
                       value={emailValue} type="email"/>

                <span>Number</span>
                <input ref={numberInputRef} onChange={onReadNumberInput}
                       value={numberValue} type="tel"/>

                <span>Img</span>
                <input ref={imgInputRef} onChange={onReadImgInput}
                       value={imgValue} type="text"/>

                <span>Login</span>
                <input ref={loginInputRef} onChange={onReadLoginInput}
                       value={loginValue} type="text"/>

                <span>Password</span>
                <input ref={passwordInputRef} onChange={onReadPasswordInput}
                       value={passwordValue} type="password"/>

                <Link exact to='/authorization'>
                    <button>Sign up</button>
                </Link>
            </form>
        </div>
    )
}

export default Registration;