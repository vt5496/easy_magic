import React from "react";
import {connect} from "react-redux";
import Authorization from "./Authorization";
import {
    authorizationActionCreator, fakeAuthorizationActionCreator,
    readNewLoginTextActionCreator,
    readNewPasswordTextActionCreator
} from "../../redux/authorization-reducer";

let mapStateToProps = (state) => {
    return {
        login: state.authorization.login,
        password: state.authorization.password,
        users: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        readNewLoginText: (text) => dispatch(readNewLoginTextActionCreator(text)),
        readNewPasswordText: (text) => dispatch(readNewPasswordTextActionCreator(text)),
        authorization: (props, user) => dispatch(authorizationActionCreator(props, user)),
        fakeAuthorization: () => dispatch(fakeAuthorizationActionCreator())
    }

}

const AuthorizationContainer = connect(mapStateToProps, mapDispatchToProps)(Authorization)

export default AuthorizationContainer;