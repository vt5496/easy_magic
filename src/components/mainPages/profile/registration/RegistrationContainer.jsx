import React from "react";
import {connect} from "react-redux";
import Registration from "./Registration";
import {
    fakeRegAC,
    readNewEmailRegTextAC,
    readNewImgRegTextAC,
    readNewLoginRegTextAC,
    readNewNameRegTextAC,
    readNewNumberRegTextAC, readNewPasswordRegTextAC,
    readNewSurnameRegTextAC, regAC
} from "../../../../redux/registration-reducer";

let mapStateToProps = ({registration}) => ({
        nameValue: registration.name,
        surnameValue: registration.surname,
        emailValue: registration.email,
        numberValue: registration.number,
        imgValue: registration.img,
        loginValue: registration.login,
        passwordValue: registration.password
})
let mapDispatchToProps = dispatch => ({
        readNewNameRegText: text => dispatch(readNewNameRegTextAC(text)),
        readNewSurnameRegText: text => dispatch(readNewSurnameRegTextAC(text)),
        readNewEmailRegText: text => dispatch(readNewEmailRegTextAC(text)),
        readNewNumberRegText: text => dispatch(readNewNumberRegTextAC(text)),
        readNewImgRegText: text => dispatch(readNewImgRegTextAC(text)),
        readNewLoginRegText: text => dispatch(readNewLoginRegTextAC(text)),
        readNewPasswordRegText: text => dispatch(readNewPasswordRegTextAC(text)),
        reg: props => dispatch(regAC(props)),
        fakeReg: () => dispatch(fakeRegAC())
    })

const RegContainer = connect(mapStateToProps, mapDispatchToProps)(Registration)

export default RegContainer;

