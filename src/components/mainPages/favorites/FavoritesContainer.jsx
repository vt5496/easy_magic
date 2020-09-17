import React from "react";

import Favorites from "./Favorites";
import {addLikeAC, removeLikeAC} from "../../../redux/catalog-reducer";
import {connect} from "react-redux";


let mapStateToProps = state => ({
    catalog: state.catalog,
    user: state.user
})
let mapDispatchToProps = dispatch => ({
    addLike: dish => dispatch(addLikeAC(dish)),
    removeLike: dish => dispatch(removeLikeAC(dish)),
})

let FavoritesContainer = connect(mapStateToProps, mapDispatchToProps)(Favorites)

export default FavoritesContainer;