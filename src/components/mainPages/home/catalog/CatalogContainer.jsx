import React from "react";

import Catalog from "./Catalog";
import {sortByAC} from "../../../../redux/catalog-reducer";
import {connect} from "react-redux";

let mapStateToProps = state => ({
    sortBy: state.catalog.sortBy,
    dishes: state.catalog.dishes
})

let mapDispatchToProps = dispatch => ({
    sortedBy: sortBy => dispatch(sortByAC(sortBy))
})


let CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;