let initialState = {
    login: '',
    password: ''
};

const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW-LOGIN-TEXT':
            return {
                ...state,
                login: action.text
            }
        case 'NEW-PASSWORD-TEXT':
            return {
                ...state,
                password: action.text
            }
        case 'AUTHORIZATION':
            return {
                ...state,
                login: '',
                password: ''
            }
        case 'FAKE-LOGIN-PASSWORD':
            alert('User Login or Password is fake');
            return state;
        default:
            return state
    }
    return state
}

export const readNewLoginTextAC = text => ({
    type: 'NEW-LOGIN-TEXT',
    text
})

export const readNewPasswordTextAC = text => ({
    type: 'NEW-PASSWORD-TEXT',
    text
})

export const authorizationAC = ({login, password}, user) => ({
    type: 'AUTHORIZATION',
    login,
    password,
    user,
})
export const fakeAuthorizationAC = () => ({
    type: 'FAKE-LOGIN-PASSWORD'
})

export default authorizationReducer;
