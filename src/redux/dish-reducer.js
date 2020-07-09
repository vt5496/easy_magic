const dishReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-FAV':
            if (state.user.favorites.includes(action.idDish) === false) {
                state.user.favorites.push(action.idDish)
                console.log('ADD FAV')
            } else {
                state.user.favorites.splice(state.user.favorites.indexOf(action.idDish, 1))
                console.log('DELETE FAV')
            }
            break;

        case 'ADD-LIKE':
            if (state.user.likes.includes(action.idDish) === false) {
                state.user.likes.push(action.idDish)
                state.catalog[action.idDish].likes++;
                debugger;
            } else {
                state.user.likes.splice(state.user.likes.indexOf(action.idDish, 1))
                state.catalog[action.idDish].likes--;
            }
            break;

        case 'NEW-COMMENT-TEXT':
            state.catalog[action.idDish].newCommentText = action.newCommentText;
            break;
        case 'ADD-COMMENT':
            state.catalog[action.idDish].comments.push({id: action.userId, value: action.comment});
            state.catalog[action.idDish].newCommentText = '';
            break;
        default:
            alert('I can`t find this type!')
    }
    return state;
}

export const addFavActionCreator = props => ({
    type: 'ADD-FAV',
    idDish: props.dish.idDish
})

export const addLikeActionCreator = props => ({
    type: 'ADD-LIKE',
    idDish: props.dish.idDish,
    like: props.dish.like
});

export const addCommentActionCreator = props => ({
    type: 'ADD-COMMENT',
    idDish: props.dish.id,
    userId: props.user.id,
    comment: props.dish.newCommentText
});
export const readNewCommentTextActionCreator = (props, text) => ({
    type: 'NEW-COMMENT-TEXT',
    idDish: props.dish.id,
    newCommentText: text
});

export default dishReducer;