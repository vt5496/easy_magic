import React from "react";

import Catalog from "./Catalog";
import {addCommentAC, addLikeAC, removeLikeAC} from "../../../redux/catalog-reducer";
import {createReadNewCommentTextAC, readNewCommentTextAC} from "../../../redux/user-reducer";
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
        addLike: (dish) => dispatch(addLikeAC(dish)),
        removeLike: (dish) => dispatch(removeLikeAC(dish)),

        readNewCommentText: (text, dish) => dispatch(readNewCommentTextAC(text, dish)),
        createReadNewCommentText: (text, dish) => dispatch(createReadNewCommentTextAC(text, dish)),

        addComment: (props, dish) => dispatch(addCommentAC(props, dish))
    }
}


let CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;