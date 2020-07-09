import React from "react";

import OneDish from "../dishCard/OneDish";

import s from './favorites.module.css';


const Favorites = (props) => {
    let MainFavFilter = props.catalog.map(dish => {
        if (props.user.favorites.includes(dish.idDish) === true) {
            return <OneDish user={props.user} dish={dish} dispatch={props.dispatch}/>
        }
    });


    return (
        <div className={s.List}>
            {MainFavFilter}
        </div>
    )
};

export default Favorites;

