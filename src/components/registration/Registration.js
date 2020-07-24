import React from "react";
import {NavLink} from "react-router-dom";


import s from './registration.module.css'
import {
    fakeRegistration,
    readNewEmailRegistrationText,
    readNewImgRegistrationText,
    readNewLoginRegistrationText,
    readNewNameRegistrationText,
    readNewNumberRegistrationText,
    readNewPasswordRegistrationText,
    readNewSurnameRegistrationText, registration
} from "../../redux/registration-reducer";

const Registration = (props) => {

    let newNameRegistrationElement = React.createRef();
    let readNewNameRegistrationText = () => {
        let text = newNameRegistrationElement.current.value;
        props.readNewNameRegistrationText(text)
    };
    let newNameRegistrationTextValue = props.registration.name;

    let newSurnameRegistrationElement = React.createRef();
    let readNewSurnameRegistrationText = () => {
        let text = newSurnameRegistrationElement.current.value;
        props.readNewSurnameRegistrationText(text)
    };
    let newSurnameRegistrationTextValue = props.registration.surname;

    let newEmailRegistrationElement = React.createRef();
    let readNewEmailRegistrationText = () => {
        let text = newEmailRegistrationElement.current.value;
        props.readNewEmailRegistrationText(text)
    };
    let newEmailRegistrationTextValue = props.registration.email;

    let newNumberRegistrationElement = React.createRef();
    let readNewNumberRegistrationText = () => {
        let text = newNumberRegistrationElement.current.value;
        props.readNewNumberRegistrationText(text)
    };
    let newNumberRegistrationTextValue = props.registration.number;

    let newImgRegistrationElement = React.createRef();
    let readNewImgRegistrationText = () => {
        let text = newImgRegistrationElement.current.value;
        props.readNewImgRegistrationText(text)
    };
    let newImgRegistrationTextValue = props.registration.img;

    let newLoginRegistrationElement = React.createRef();
    let readNewLoginRegistrationText = () => {
        let text = newLoginRegistrationElement.current.value;
        props.readNewLoginRegistrationText(text)
    };
    let newLoginRegistrationTextValue = props.registration.login;

    let newPasswordRegistrationElement = React.createRef();
    let readNewPasswordRegistrationText = () => {
        let text = newPasswordRegistrationElement.current.value;
        props.readNewPasswordRegistrationText(text)
    };
    let newPasswordRegistrationTextValue = props.password;

    let registrationButton = (event) => {
        event.preventDefault();
        if (props.login && props.password && props.email && props.name && props.surname && props.img && props.number) {
            props.registration(props)
        } else {
            props.fakeRegistration()
        }
    }

    return (
        <div className={s.main}>
            <form action="" className={s.form}>
                <h2>Registration</h2>

                <span>Name</span>
                <input ref={newNameRegistrationElement} onChange={readNewNameRegistrationText}
                       value={newNameRegistrationTextValue} type="text"/>

                <span>Surname</span>
                <input ref={newSurnameRegistrationElement} onChange={readNewSurnameRegistrationText}
                       value={newSurnameRegistrationTextValue} type="text"/>

                <span>Email</span>
                <input ref={newEmailRegistrationElement} onChange={readNewEmailRegistrationText}
                       value={newEmailRegistrationTextValue} type="email"/>

                <span>Number</span>
                <input ref={newNumberRegistrationElement} onChange={readNewNumberRegistrationText}
                       value={newNumberRegistrationTextValue} type="tel"/>

                <span>Img</span>
                <input ref={newImgRegistrationElement} onChange={readNewImgRegistrationText}
                       value={newImgRegistrationTextValue} type="text"/>

                <span>Login</span>
                <input ref={newLoginRegistrationElement} onChange={readNewLoginRegistrationText}
                       value={newLoginRegistrationTextValue} type="text"/>

                <span>Password</span>
                <input ref={newPasswordRegistrationElement} onChange={readNewPasswordRegistrationText}
                       value={newPasswordRegistrationTextValue} type="password"/>

                <NavLink exact to='/authorization'>
                    <button onClick={registrationButton}>Sign up</button>
                </NavLink>
            </form>
        </div>
    )
}

export default Registration;