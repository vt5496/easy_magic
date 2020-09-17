import React from "react";

import Catalog from "./Catalog";
import {addLikeAC, removeLikeAC, sortByAC} from "../../../../redux/catalog-reducer";
import {connect} from "react-redux";

let mapStateToProps = state => ({
        catalog: state.catalog,
        user: state.user,
        sortBy: state.catalog.sortBy
    })

let mapDispatchToProps = dispatch => ({
    addLike: dish => dispatch(addLikeAC(dish)),
    removeLike: dish => dispatch(removeLikeAC(dish)),

    sortedBy: sortBy => dispatch(sortByAC(sortBy))
})


let CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;