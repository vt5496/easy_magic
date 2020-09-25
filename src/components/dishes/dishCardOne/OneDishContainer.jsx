import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import OneDish from "./OneDish";
import {compose} from "redux";

const mapStateToProps = (state, {idDish}) => {

    const getFirstArrItem = arr => arr[0]
    const filterArrById = (arr, id) =>
        arr.filter(dish => dish.idDish === id)
    const findById = compose(getFirstArrItem, filterArrById)

    return ({
        dish: findById(state.catalog.dishes, idDish)
    })
}


const OneDishContainer = connect(mapStateToProps)(OneDish)

export default withRouter(OneDishContainer);