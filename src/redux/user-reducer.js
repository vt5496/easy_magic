let initialState = {
    idUser: 0,
    login: 'vt5496',
    name: "Vlad",
    surname: "Tkachenko",
    number: 380635638793,
    get fullName() {
        return `${this.name} ${this.surname}`
    },
    img: "https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/104180479_2991544977600183_335949495529035300_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=aIN5aE96wwQAX_H3Vxx&_nc_ht=scontent.fiev25-2.fna&oh=465a5e40190a1b8596bd1fb34ee8cbc8&oe=5F3B0F0B",
    comments: [],
    newCommentText: [],
    likes: [],
    searchText: '',
    search: [],
    settings: [],
    historyOders: [],
    popularityDishs: [],
    offers: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-LIKE':
            state.likes.push(action.idDish)
            break;
        case 'REMOVE-LIKE':
            state.likes.splice(state.likes.indexOf(action.idDish))
            break;

        case 'READ-NEW-COMMENT-TEXT':
            state.newCommentText[action.idDish].value = action.newCommentText;
            break;
        case 'CREATE-READ-NEW-COMMENT-TEXT':
            state.newCommentText.push({
                idDish: action.idDish,
                value: action.newCommentText
            })
            break;
        case 'ADD-COMMENT':
            state.newCommentText.find(commentObject => commentObject.idDish === action.idDish).value = '';
            break;
        case 'AUTHORIZATION':
            state = action.user;
            break;
        default:
            return state;
    }
    return state;
}


export const readNewCommentTextActionCreator = (props, text) => {
    return ({
        type: 'READ-NEW-COMMENT-TEXT',
        idDish: props.dish.idDish,
        newCommentText: text
    })
};
export const createReadNewCommentTextActionCreator = (props, text) => {
    return ({
        type: 'CREATE-READ-NEW-COMMENT-TEXT',
        idDish: props.dish.idDish,
        newCommentText: text
    })
};


export default userReducer;