let initialState = {
    login: '',
    password: ''
};

const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW-LOGIN-TEXT':
            state.login = action.text;
            break;
        case 'NEW-PASSWORD-TEXT':
            state.password = action.text;
            break;
        case 'AUTHORIZATION':
                    state.login='';
                    state.password='';
            break;
        case 'FAKE-LOGIN-PASSWORD':
            alert('User Login or Password is fake');
            return state;
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
