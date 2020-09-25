import React from "react";
import {connect} from "react-redux";
import Authorization from "./Authorization";
import {
    authorizationAC, fakeAuthorizationAC,
    readNewLoginTextAC,
    readNewPasswordTextAC
} from "../../../../redux/authorization-reducer";

let mapStateToProps = (state) => {
    return {
        loginValue: state.authorization.login,
        passwordValue: state.authorization.password,
        users: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendLoginValueToState: (text) => dispatch(readNewLoginTextAC(text)),
        sendPasswordValueToState: (text) => dispatch(readNewPasswordTextAC(text)),
        authorization: (props, user) => dispatch(authorizationAC(props, user)),
        fakeAuthorization: () => dispatch(fakeAuthorizationAC())
    }

}

const AuthorizationContainer = connect(mapStateToProps, mapDispatchToProps)(Authorization)

export default AuthorizationContainer;