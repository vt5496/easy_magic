import React from "react";
import {connect} from "react-redux";
import Finder from "./Finder";
import {finderDishsActionCreator, finderEmptyActionCreator} from "../../redux/finder-reducer";
import {readNewFinderTextActionCreator} from "../../redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        catalog: state.catalog,
        img: state.img,
        user: state.user,
        users: state.users,
        finder: state.finder
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        readNewFinderText: (text) => dispatch(readNewFinderTextActionCreator(text)),
        finderDishs: (dish) => dispatch(finderDishsActionCreator(dish)),
        emptyFinder: () => dispatch(finderEmptyActionCreator())
    }
}

const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(Finder);

export default FinderContainer;