import React from "react";
import {connect} from "react-redux";
import Finder from "./Finder";
import {
    finderDishsAC, finderDishsEmptyAC,
    finderWordsAC, finderWordsEmptyAC,
} from "../../../redux/finder-reducer";
import {readNewFinderTextAC} from "../../../redux/user-reducer";

let mapStateToProps = state => ({
    catalog: state.catalog,
    user: state.user,
    finderDishsArr: state.finder.dishs,
    finderWordsArr: state.finder.words
})

let mapDispatchToProps = dispatch => ({
    readNewFinderInputValue: text => dispatch(readNewFinderTextAC(text)),

    finderDishs: dish => dispatch(finderDishsAC(dish)),
    finderDishsEmpty: () => dispatch(finderDishsEmptyAC()),

    finderWords: dish => dispatch(finderWordsAC(dish)),
    finderWordsEmpty: () => dispatch(finderWordsEmptyAC())
})

const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(Finder);

export default FinderContainer;