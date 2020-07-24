import React from "react";
import {connect} from "react-redux";
import Registration from "./Registration";
import {
    fakeRegistrationActionCreator,
    readNewEmailRegistrationTextActionCreator,
    readNewImgRegistrationTextActionCreator,
    readNewLoginRegistrationTextActionCreator,
    readNewNameRegistrationTextActionCreator,
    readNewNumberRegistrationTextActionCreator, readNewPasswordRegistrationTextActionCreator,
    readNewSurnameRegistrationTextActionCreator, registrationActionCreator
} from "../../redux/registration-reducer";

let mapStateToProps = (state) => {
    return {
        name: state.registration.name,
        surname: state.registration.surname,
        email: state.registration.email,
        number: state.registration.number,
        img: state.registration.img,
        login: state.registration.login,
        password: state.registration.password

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        readNewNameRegistrationText: (text) => dispatch(readNewNameRegistrationTextActionCreator(text)),
        readNewSurnameRegistrationText: (text) => dispatch(readNewSurnameRegistrationTextActionCreator(text)),
        readNewEmailRegistrationText: (text) => dispatch(readNewEmailRegistrationTextActionCreator(text)),
        readNewNumberRegistrationText: (text) => dispatch(readNewNumberRegistrationTextActionCreator(text)),
        readNewImgRegistrationText: (text) => dispatch(readNewImgRegistrationTextActionCreator(text)),
        readNewLoginRegistrationText: (text) => dispatch(readNewLoginRegistrationTextActionCreator(text)),
        readNewPasswordRegistrationText: (text) => dispatch(readNewPasswordRegistrationTextActionCreator(text)),
        registration: (props) => dispatch(registrationActionCreator(props)),
        fakeRegistration: () => dispatch(fakeRegistrationActionCreator())
    }
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration)

export default RegistrationContainer;

