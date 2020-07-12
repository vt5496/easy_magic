import React from "react";

const authorizationReducer = (state, action) => {
    switch (action.type) {
        case 'NEW-LOGIN-TEXT':
            state.newUser[0].login = action.text;
            break;
        case 'NEW-PASSWORD-TEXT':
            state.newUser[0].password = action.text;
            break;
        case 'AUTHORIZATION':
            if (state.users.find(user => user.login === action.login)) {
                let user = state.users.find(user => user.login === action.login);
                if (user.password === action.password){
                    state.user = user;
                    state.newUser[0].login='';
                    state.newUser[0].password=''
                } else {
                    alert('Do not real Password!')
                }
            } else {
                alert('User Login not found')
            }
            break;
        default:
            return state
    }
    return state
}

export const readNewLoginTextActionCreator = text => ({
    type: 'NEW-LOGIN-TEXT',
    text: text
})

export const readNewPasswordTextActionCreator = text => ({
    type: 'NEW-PASSWORD-TEXT',
    text: text
})

export const authorizationActionCreator = props => ({
    type: 'AUTHORIZATION',
    login: props.authorization.login,
    password: props.authorization.password
})

export default authorizationReducer;
