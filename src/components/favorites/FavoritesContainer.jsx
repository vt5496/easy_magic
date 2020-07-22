import React from "react";

import Favorites from "./Favorites";
import {addCommentActionCreator, addLikeActionCreator, removeLikeActionCreator} from "../../redux/catalog-reducer";
import {createReadNewCommentTextActionCreator, readNewCommentTextActionCreator} from "../../redux/user-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        catalog: state.catalog,
        img: state.img,
        user: state.user,
        users: state.users
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addLike: (dish) => dispatch(addLikeActionCreator(dish)),
        removeLike: (dish) => dispatch(removeLikeActionCreator(dish)),

        readNewCommentText: (props, text, dish) => dispatch(readNewCommentTextActionCreator(props, text, dish)),
        createReadNewCommentText: (props, text, dish) => dispatch(createReadNewCommentTextActionCreator(props, text, dish)),

        addComment: (props, dish) => dispatch(addCommentActionCreator(props, dish))
    }
}

let FavoritesContainer = connect(mapStateToProps, mapDispatchToProps)(Favorites)

export default FavoritesContainer;