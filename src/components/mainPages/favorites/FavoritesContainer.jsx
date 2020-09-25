import React from "react";

import Favorites from "./Favorites";
import {connect} from "react-redux";


let mapStateToProps = state => ({
    likes: state.user.likes
})


let FavoritesContainer = connect(mapStateToProps)(Favorites)

export default FavoritesContainer;