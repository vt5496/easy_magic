let initialState = {
    name: '',
    surname: '',
    email: '',
    number: '',
    img: '',
    login: '',
    password: '',

};

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'NEW-NAME-REGISTRATION-TEXT':
            return {
                ...state,
                name: action.text
            }
        case 'NEW-SURNAME-REGISTRATION-TEXT':
            return {
                ...state,
                surname: action.text
            }
        case 'NEW-EMAIL-REGISTRATION-TEXT':
            return {
                ...state,
                email: action.text
            }
        case 'NEW-NUMBER-REGISTRATION-TEXT':
            return {
                ...state,
                number: action.text
            }
        case 'NEW-IMG-REGISTRATION-TEXT':
            return {
                ...state,
                img: action.text
            }
        case 'NEW-LOGIN-REGISTRATION-TEXT':
            return {
                ...state,
                login: action.text
            }
        case 'NEW-PASSWORD-REGISTRATION-TEXT':
            return {
                ...state,
                password: action.text
            }

        case 'REGISTRATION-NEW-USER':
            return {
                ...state,
                name: '',
                surname: '',
                email: '',
                number: '',
                img: '',
                login: '',
                password: ''
            }
        case 'FAKE-REGISTRATION-NEW-USER':
            alert('Not correct data')
            return state;
        default:
            return state;
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
export const fakeRegistrationActionCreator = () => ({
    type: 'FAKE-REGISTRATION-NEW-USER'
})


export default registrationReducer;