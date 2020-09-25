import React from "react";
import {connect} from "react-redux";
import Finder from "./Finder";
import {
    finderDishesAC, finderDishesEmptyAC,
    finderWordsAC, finderWordsEmptyAC,
} from "../../../redux/finder-reducer";
import {cleanFinderTextAC, readNewFinderTextAC} from "../../../redux/user-reducer";

const mapStateToProps = state => ({
    catalog: state.catalog,
    user: state.user,
    dishesFinder: state.finder.dishes,
})

const mapDispatchToProps = dispatch => ({
    sendInputValueToState: text => dispatch(readNewFinderTextAC(text)),

    sendFinderDishesToState: idDish => dispatch(finderDishesAC(idDish)),
    cleanFinderDishesInState: () => dispatch(finderDishesEmptyAC()),

    sendFinderWordsToState: idDish => dispatch(finderWordsAC(idDish)),
    cleanFinderWordsInState: () => dispatch(finderWordsEmptyAC()),

    cleanFinderInputInState: () => dispatch(cleanFinderTextAC())
})

const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(Finder);

export default FinderContainer;