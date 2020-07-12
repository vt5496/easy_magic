const dishReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-FAV':
            if (state.user.favorites.includes(action.idDish) === false) {
                state.user.favorites.push(action.idDish)
                state.catalog[action.idDish].fav++;
            } else {
                state.user.favorites.splice(state.user.favorites.indexOf(action.idDish))
                console.log('DELETE FAV')
                state.catalog[action.idDish].fav--;
            }
            break;

        case 'ADD-LIKE':
            if (state.user.likes.includes(action.idDish) === false) {
                state.user.likes.push(action.idDish)
                state.catalog[action.idDish].likes++;
            } else {
                state.user.likes.splice(state.user.likes.indexOf(action.idDish))
                state.catalog[action.idDish].likes--;
            }
            break;

        case 'NEW-COMMENT-TEXT':
            let userNewTextObject = state.user.newCommentText.find(dish => dish.idDish === action.idDish);
            if (userNewTextObject) {
                userNewTextObject.value = action.newCommentText;
            } else {
                state.user.newCommentText.push({
                    idDish: action.idDish,
                    value: action.newCommentText
                })
            }
            break;
        case 'ADD-COMMENT':
            state.catalog[action.idDish].comments.push({
                idUser: action.idUser,
                idComment: action.idComment,
                value: action.value
            });
            state.user.newCommentText.find(commentObject => commentObject.idDish === action.idDish).value = '';
            break;

        default:
            return state;
    }

    return state;
}


export const addFavActionCreator = props => ({
    type: 'ADD-FAV',
    idDish: props.dish.idDish
})

export const addLikeActionCreator = (props) => ({
    type: 'ADD-LIKE',
    idDish: props.dish.idDish,
    like: props.dish.like,
});


export const readNewCommentTextActionCreator = (props, text) => ({
    type: 'NEW-COMMENT-TEXT',
    idDish: props.dish.idDish,
    newCommentText: text
});
export const addCommentActionCreator = props => {
    let newCommentTextObject = props.user.newCommentText.find(dish => dish.idDish === props.dish.idDish);
    if (newCommentTextObject) {
        if (newCommentTextObject.value.trim()) {
            return ({
                type: 'ADD-COMMENT',
                idDish: props.dish.idDish,
                idUser: props.user.idUser,
                idComment: props.dish.comments.length,
                value: newCommentTextObject.value
            })
        } else {
            return ({type: 'undefined'})
        }
    } else {
        return ({type: 'undefined'})
    }
};

export default dishReducer;