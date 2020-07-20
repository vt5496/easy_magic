import React from "react";

import OneDish from "../bigDishCard/OneDish";

import s from './favorites.module.css';


const Favorites = (props) => {
    let MainLikeFilter = props.state.catalog.map(dish => {
        if (props.state.user.likes.includes(dish.idDish)) {
            return <OneDish state={props.state} dish={dish} dispatch={props.dispatch}/>
        }
    });


    return (
        <div className={s.List}>
            {MainLikeFilter}
        </div>
    )
};

export default Favorites;

