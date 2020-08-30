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

    //create refs
    let newNameRegistrationElement = React.createRef()
    let newSurnameRegistrationElement = React.createRef();
    let newEmailRegistrationElement = React.createRef();
    let newNumberRegistrationElement = React.createRef();
    let newImgRegistrationElement = React.createRef();
    let newLoginRegistrationElement = React.createRef();
    let newPasswordRegistrationElement = React.createRef();

    //values of inputs
    let newNameRegistrationTextValue = props.name;
    let newSurnameRegistrationTextValue = props.surname;
    let newEmailRegistrationTextValue = props.email;
    let newNumberRegistrationTextValue = props.number;
    let newImgRegistrationTextValue = props.img;
    let newLoginRegistrationTextValue = props.login;
    let newPasswordRegistrationTextValue = props.password;

    //f dispatch
    let readNewNameRegistrationText = () => {
        let text = newNameRegistrationElement.current.value;
        props.readNewNameRegistrationText(text)
    };
    let readNewSurnameRegistrationText = () => {
        let text = newSurnameRegistrationElement.current.value;
        props.readNewSurnameRegistrationText(text)
    };
    let readNewEmailRegistrationText = () => {
        let text = newEmailRegistrationElement.current.value;
        props.readNewEmailRegistrationText(text)
    };
    let readNewNumberRegistrationText = () => {
        let text = newNumberRegistrationElement.current.value;
        props.readNewNumberRegistrationText(text)
    };
    let readNewImgRegistrationText = () => {
        let text = newImgRegistrationElement.current.value;
        props.readNewImgRegistrationText(text)
    };
    let readNewLoginRegistrationText = () => {
        let text = newLoginRegistrationElement.current.value;
        props.readNewLoginRegistrationText(text)
    };
    let readNewPasswordRegistrationText = () => {
        let text = newPasswordRegistrationElement.current.value;
        props.readNewPasswordRegistrationText(text)
    };

    let registrationButton = (e) => {
        e.preventDefault();
        (props.login && props.password && props.email && props.name &&
            props.surname && props.img && props.number) ?
            props.registration(props) :
            props.fakeRegistration()
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