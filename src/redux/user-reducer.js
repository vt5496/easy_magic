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
    finderText: '',
    search: [],
    settings: [],
    historyOders: [],
    popularityDishs: [],
    offers: []
};

const userReducer = (state = initialState, action) => {

    let newCommentText = state.newCommentText;
    switch (action.type) {

        case 'ADD-LIKE':
            return {
                ...state,
                likes: [...state.likes, action.idDish]
            }
        case 'REMOVE-LIKE':
            let removeLike = [...state.likes]
            removeLike.splice(state.likes.indexOf(action.idDish))
            return{
                ...state,
                likes: removeLike
            }

        case 'READ-NEW-COMMENT-TEXT':
            newCommentText.map(commentText => {
                if (commentText.idDish == action.idDish) {
                    commentText.value = action.newCommentText
                }
            })

            return {
                ...state,
                newCommentText: newCommentText

            }
        case 'CREATE-READ-NEW-COMMENT-TEXT':
            return {
                ...state,
                newCommentText: [...state.newCommentText, {
                    idDish: action.idDish,
                    value: action.newCommentText
                }]
            }
        case 'ADD-COMMENT':
            newCommentText.find(commentObject => commentObject.idDish === action.idDish).value = ''
            return {
                ...state,
                newCommentText: newCommentText
            }

        case 'AUTHORIZATION':
            return action.user

        case 'NEW-FINDER-TEXT':
            return {
                ...state,
                finderText: action.text
            }
        default:
            return state;
    }
    return state;
}


export const readNewCommentTextActionCreator = (text, dish) => {
    return ({
        type: 'READ-NEW-COMMENT-TEXT',
        idDish: dish.idDish,
        newCommentText: text
    })
};
export const createReadNewCommentTextActionCreator = (text, dish) => {
    return ({
        type: 'CREATE-READ-NEW-COMMENT-TEXT',
        idDish: dish.idDish,
        newCommentText: text
    })
};


export const readNewFinderTextActionCreator = (text) => {
    return ({
        type: 'NEW-FINDER-TEXT',
        newFinderText: text
    })
};


export default userReducer;