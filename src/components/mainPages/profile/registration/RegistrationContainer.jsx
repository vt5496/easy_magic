import React from "react";
import {connect} from "react-redux";
import Registration from "./Registration";
import {
    fakeRegistrationAC,
    readNewEmailRegistrationTextAC,
    readNewImgRegistrationTextAC,
    readNewLoginRegistrationTextAC,
    readNewNameRegistrationTextAC,
    readNewNumberRegistrationTextAC, readNewPasswordRegistrationTextAC,
    readNewSurnameRegistrationTextAC, registrationAC
} from "../../../../redux/registration-reducer";

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
        readNewNameRegistrationText: (text) => dispatch(readNewNameRegistrationTextAC(text)),
        readNewSurnameRegistrationText: (text) => dispatch(readNewSurnameRegistrationTextAC(text)),
        readNewEmailRegistrationText: (text) => dispatch(readNewEmailRegistrationTextAC(text)),
        readNewNumberRegistrationText: (text) => dispatch(readNewNumberRegistrationTextAC(text)),
        readNewImgRegistrationText: (text) => dispatch(readNewImgRegistrationTextAC(text)),
        readNewLoginRegistrationText: (text) => dispatch(readNewLoginRegistrationTextAC(text)),
        readNewPasswordRegistrationText: (text) => dispatch(readNewPasswordRegistrationTextAC(text)),
        registration: (props) => dispatch(registrationAC(props)),
        fakeRegistration: () => dispatch(fakeRegistrationAC())
    }
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration)

export default RegistrationContainer;

