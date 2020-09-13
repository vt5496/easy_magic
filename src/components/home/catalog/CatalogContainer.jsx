import React from "react";

import Catalog from "./Catalog";
import {addCommentAC, addLikeAC, removeLikeAC, sortByAC} from "../../../redux/catalog-reducer";
import {createReadNewCommentTextAC, readNewCommentTextAC} from "../../../redux/user-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        catalog: state.catalog,
        img: state.img,
        user: state.user,
        users: state.users,
        sortBy: state.catalog.sortBy
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addLike: dish => dispatch(addLikeAC(dish)),
        removeLike: dish => dispatch(removeLikeAC(dish)),

        readNewCommentText: (text, dish) => dispatch(readNewCommentTextAC(text, dish)),
        createReadNewCommentText: (text, dish) => dispatch(createReadNewCommentTextAC(text, dish)),

        addComment: (props, dish) => dispatch(addCommentAC(props, dish)),

        sortedBy: sortBy => dispatch(sortByAC(sortBy))
    }
}


let CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;