import React from "react";

const RegistrationReducer = (state, action) => {
    switch (action.type) {
        case 'NEW-NAME-REGISTRATION-TEXT':
            state.newUser[1].name = action.text;
            break;
        case 'NEW-SURNAME-REGISTRATION-TEXT':
            state.newUser[1].surname = action.text;
            break;
        case 'NEW-EMAIL-REGISTRATION-TEXT':
            state.newUser[1].email = action.text;
            break;
        case 'NEW-NUMBER-REGISTRATION-TEXT':
            state.newUser[1].number = action.text;
            break;
        case 'NEW-IMG-REGISTRATION-TEXT':
            state.newUser[1].img = action.text;
            break;
        case 'NEW-LOGIN-REGISTRATION-TEXT':
            state.newUser[1].login = action.text;
            break;
        case 'NEW-PASSWORD-REGISTRATION-TEXT':
            state.newUser[1].password = action.text;
            break;
        case 'REGISTRATION-NEW-USER':
            if (action.login && action.password && action.email && action.name && action.surname && action.img && action.number) {
                state.users.push({
                    name: action.name,
                    surname: action.surname,
                    email: action.email,
                    number: action.number,
                    img: action.img,
                    login: action.login,
                    password: action.password,
                    favorites: [],
                    comments: [],
                    newCommentText: [],
                    likes: [],
                    settings: [],
                    historyOders: [],
                    popularityDishs: [],
                    offers: []
                })
                state.newUser[1].name = '';
                state.newUser[1].surname = '';
                state.newUser[1].email = '';
                state.newUser[1].number = '';
                state.newUser[1].img = '';
                state.newUser[1].login = '';
                state.newUser[1].password = '';
            } else {
                alert('Not correct data')
            }
        default:
            return state
    }
    return state
}

export const readNewNameRegistrationTextActionCreator = text => ({
    type: 'NEW-NAME-REGISTRATION-TEXT',
    text: text
})

export const readNewSurnameRegistrationTextActionCreator = text => ({
    type: 'NEW-SURNAME-REGISTRATION-TEXT',
    text: text
})

export const readNewEmailRegistrationTextActionCreator = text => ({
    type: 'NEW-EMAIL-REGISTRATION-TEXT',
    text: text
})

export const readNewNumberRegistrationTextActionCreator = text => ({
    type: 'NEW-NUMBER-REGISTRATION-TEXT',
    text: text
})

export const readNewImgRegistrationTextActionCreator = text => ({
    type: 'NEW-IMG-REGISTRATION-TEXT',
    text: text
})

export const readNewLoginRegistrationTextActionCreator = text => ({
    type: 'NEW-LOGIN-REGISTRATION-TEXT',
    text: text
})

export const readNewPasswordRegistrationTextActionCreator = text => ({
    type: 'NEW-PASSWORD-REGISTRATION-TEXT',
    text: text
})

export const registrationActionCreator = props => ({
    type: 'REGISTRATION-NEW-USER',
    name: props.registration.name,
    surname: props.registration.surname,
    email: props.registration.email,
    number: props.registration.number,
    img: props.registration.img,
    login: props.registration.login,
    password: props.registration.password
})



export default RegistrationReducer;