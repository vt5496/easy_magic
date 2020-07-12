import React from "react";

import OneDish from "../dishCard/OneDish";

import s from './favorites.module.css';


const Favorites = (props) => {
    let MainFavFilter = props.state.catalog.map(dish => {
        if (props.state.user.favorites.includes(dish.idDish)) {
            return <OneDish user={props.state.user} users={props.state.users} dish={dish} dispatch={props.dispatch}/>
        }
    });


    return (
        <div className={s.List}>
            {MainFavFilter}
        </div>
    )
};

export default Favorites;

