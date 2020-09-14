import React from "react";

import s from './favorites.module.css';
import MiniDish from "../dishCard/miniDishCard/MiniDish";

const Favorites = (props) => {

    let favArr = props.catalog.pizza.filter(d =>
        props.user.likes.includes(d.idDish))
    let favDOM = favArr.map((dish, i) =>
        <MiniDish
            key={i}

            user={props.user}
            users={props.users}
            img={props.img}
            dish={dish}

            addLike={props.addLike}
            removeLike={props.removeLike}
        />
    )

    return (
        <div className={s.List}>
            {favDOM}
        </div>
    )
};

export default Favorites;

