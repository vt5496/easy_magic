import React from "react";
import {connect} from "react-redux";
import Finder from "./Finder";
import {
    finderDishsAC, finderDishsEmptyAC,
    finderWordsAC, finderWordsEmptyAC,
} from "../../redux/finder-reducer";
import {readNewFinderTextAC} from "../../redux/user-reducer";
import {addLikeAC, removeLikeAC} from "../../redux/catalog-reducer";

let mapStateToProps = (state) => {
    return {
        catalog: state.catalog,
        img: state.img,
        user: state.user,
        users: state.users,
        finderDishsArr: state.finder.dishs,
        finderWordsArr: state.finder.words
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        readNewFinderInputValue: (text) => dispatch(readNewFinderTextAC(text)),

        finderDishs: (dish) => dispatch(finderDishsAC(dish)),
        finderDishsEmpty: () => dispatch(finderDishsEmptyAC()),

        finderWords: (dish) => dispatch(finderWordsAC(dish)),
        finderWordsEmpty: () => dispatch(finderWordsEmptyAC()),

        addLike: (dish) => dispatch(addLikeAC(dish)),
        removeLike: (dish) => dispatch(removeLikeAC(dish))
    }
}

const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(Finder);

export default FinderContainer;