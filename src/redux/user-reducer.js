const initialState = {
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
    historyOrders: [],
    popularityDishes: [],
    offers: []
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD-LIKE':
            return {
                ...state,
                likes: [...state.likes, action.idDish]
            }
        case 'REMOVE-LIKE':
            return {
                ...state,
                likes: [...state.likes.filter(like =>
                    like !== action.idDish)]
            }

        case 'READ-NEW-COMMENT-TEXT':
            return {
                ...state,
                newCommentText: [...state.newCommentText.map(commentObject =>
                    (commentObject.idDish === action.idDish) ?
                        {idDish: commentObject.idDish, value: action.newCommentText} :
                        commentObject
                )]

            }
        case 'CREATE-NEW-COMMENT-OBJECT':
            return {
                ...state,
                newCommentText: [...state.newCommentText, {
                    idDish: action.idDish,
                    value: action.newCommentText
                }]
            }
        case 'ADD-COMMENT':
            return {
                ...state,
                newCommentText: [...state.newCommentText.filter(commentObject =>
                    commentObject.idDish !== action.idDish)]
            }

        case 'AUTHORIZATION':
            return action.user

        case 'NEW-FINDER-TEXT':
            return {
                ...state,
                finderText: action.newFinderText
            }

        case 'CLEAN-FINDER-TEXT':
            return {
                ...state,
                finderText: ''
            }
        default:
            return state;
    }
    return state;
}


export const readNewCommentTextAC = (newCommentText, idDish) =>
    ({
        type: 'READ-NEW-COMMENT-TEXT',
        idDish,
        newCommentText
    })
export const createNewCommentObjectAC = (newCommentText, idDish) =>
    ({
        type: 'CREATE-NEW-COMMENT-OBJECT',
        idDish,
        newCommentText
    })

export const readNewFinderTextAC = newFinderText =>
    ({
        type: 'NEW-FINDER-TEXT',
        newFinderText
    })

export const cleanFinderTextAC = () =>
    ({
        type: 'CLEAN-FINDER-TEXT'
    })


export default userReducer;