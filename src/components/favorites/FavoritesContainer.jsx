import React from "react";

import Favorites from "./Favorites";
import {addCommentAC, addLikeAC, removeLikeAC} from "../../redux/catalog-reducer";
import {createReadNewCommentTextAC, readNewCommentTextAC} from "../../redux/user-reducer";
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
        addLike: (dish) => dispatch(addLikeAC(dish)),
        removeLike: (dish) => dispatch(removeLikeAC(dish)),

        readNewCommentText: (props, text, dish) => dispatch(readNewCommentTextAC(props, text, dish)),
        createReadNewCommentText: (props, text, dish) => dispatch(createReadNewCommentTextAC(props, text, dish)),

        addComment: (props, dish) => dispatch(addCommentAC(props, dish))
    }
}

let FavoritesContainer = connect(mapStateToProps, mapDispatchToProps)(Favorites)

export default FavoritesContainer;