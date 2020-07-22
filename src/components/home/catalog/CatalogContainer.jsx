import React from "react";

import Catalog from "./Catalog";
import {addCommentActionCreator, addLikeActionCreator, removeLikeActionCreator} from "../../../redux/catalog-reducer";
import {createReadNewCommentTextActionCreator, readNewCommentTextActionCreator} from "../../../redux/user-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        catalog: state.catalog,
        img: state.img,
        user: state.user,
        users: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addLike: (dish) => dispatch(addLikeActionCreator(dish)),
        removeLike: (dish) => dispatch(removeLikeActionCreator(dish)),

        readNewCommentText: (text, dish) => dispatch(readNewCommentTextActionCreator(text, dish)),
        createReadNewCommentText: (text, dish) => dispatch(createReadNewCommentTextActionCreator(text, dish)),

        addComment: (props, dish) => dispatch(addCommentActionCreator(props, dish))
    }
}


let CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;