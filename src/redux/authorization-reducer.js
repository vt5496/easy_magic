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

export const readNewLoginTextActionCreator = text => ({
    type: 'NEW-LOGIN-TEXT',
    text: text
})

export const readNewPasswordTextActionCreator = text => ({
    type: 'NEW-PASSWORD-TEXT',
    text: text
})

export const authorizationActionCreator = (props, user) => ({
    type: 'AUTHORIZATION',
    login: props.login,
    password: props.password,
    user: user,
})
export const fakeAuthorizationActionCreator = () => ({
    type: 'FAKE-LOGIN-PASSWORD'
})

export default authorizationReducer;
