import React from "react";
import {connect} from "react-redux";
import Finder from "./Finder";
import {finderDishsAC, finderEmptyAC} from "../../redux/finder-reducer";
import {readNewFinderTextAC} from "../../redux/user-reducer";

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
        readNewFinderText: (text) => dispatch(readNewFinderTextAC(text)),
        finderDishs: (dish) => dispatch(finderDishsAC(dish)),
        emptyFinder: () => dispatch(finderEmptyAC())
    }
}

const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(Finder);

export default FinderContainer;