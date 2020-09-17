import React from "react";

import s from './favorites.module.css';
import MiniDishContainer from "../../someWhereUsesComp/dishCard/miniDishCard/MiniDishContainer";

const Favorites = ({catalog, user}) => {

    let favArr = catalog.pizza.filter(d =>
        user.likes.includes(d.idDish))
    let favDOM = favArr.map((d, i) =>
        <MiniDishContainer
            key={i}
            dish={d}
        />
    )

    return (
        <div className={s.List}>
            {favDOM}
        </div>
    )
};

export default Favorites;

