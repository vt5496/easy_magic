const initialState = {
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


export const readNewNameRegistrationTextAC = text => ({
    type: 'NEW-NAME-REGISTRATION-TEXT',
    text
})

export const readNewSurnameRegistrationTextAC = text => ({
    type: 'NEW-SURNAME-REGISTRATION-TEXT',
    text
})

export const readNewEmailRegistrationTextAC = text => ({
    type: 'NEW-EMAIL-REGISTRATION-TEXT',
    text
})

export const readNewNumberRegistrationTextAC = text => ({
    type: 'NEW-NUMBER-REGISTRATION-TEXT',
    text
})

export const readNewImgRegistrationTextAC = text => ({
    type: 'NEW-IMG-REGISTRATION-TEXT',
    text
})

export const readNewLoginRegistrationTextAC = text => ({
    type: 'NEW-LOGIN-REGISTRATION-TEXT',
    text
})

export const readNewPasswordRegistrationTextAC = text => ({
    type: 'NEW-PASSWORD-REGISTRATION-TEXT',
    text
})


export const registrationAC = ({name, surname, email, number, img, login, password}) => ({
    type: 'REGISTRATION-NEW-USER',
    name,
    surname,
    email,
    number,
    img,
    login,
    password
})
export const fakeRegistrationAC = () => ({
    type: 'FAKE-REGISTRATION-NEW-USER'
})


export default registrationReducer;