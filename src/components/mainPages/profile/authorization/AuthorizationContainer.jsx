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
        login: state.authorization.login,
        password: state.authorization.password,
        users: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        readNewLoginText: (text) => dispatch(readNewLoginTextAC(text)),
        readNewPasswordText: (text) => dispatch(readNewPasswordTextAC(text)),
        authorization: (props, user) => dispatch(authorizationAC(props, user)),
        fakeAuthorization: () => dispatch(fakeAuthorizationAC())
    }

}

const AuthorizationContainer = connect(mapStateToProps, mapDispatchToProps)(Authorization)

export default AuthorizationContainer;