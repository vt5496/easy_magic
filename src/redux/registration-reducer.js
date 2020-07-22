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
            state.name = action.text;
            break;
        case 'NEW-SURNAME-REGISTRATION-TEXT':
            state.surname = action.text;
            break;
        case 'NEW-EMAIL-REGISTRATION-TEXT':
            state.email = action.text;
            break;
        case 'NEW-NUMBER-REGISTRATION-TEXT':
            state.number = action.text;
            break;
        case 'NEW-IMG-REGISTRATION-TEXT':
            state.img = action.text;
            break;
        case 'NEW-LOGIN-REGISTRATION-TEXT':
            state.login = action.text;
            break;
        case 'NEW-PASSWORD-REGISTRATION-TEXT':
            state.password = action.text;
            break;


        case 'REGISTRATION-NEW-USER':
            state.name = '';
            state.surname = '';
            state.email = '';
            state.number = '';
            state.img = '';
            state.login = '';
            state.password = '';
            break;
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