import React from "react";

import s from './catalog.module.css'
import MiniDish from "../../dishCard/miniDishCard/MiniDish";
import Sort from "../../SortBy/sortBy";

const Catalog = (props) => {

    let catalogDOM = props.catalog.pizza.map((dish, i) =>
         <MiniDish
            key={i}

            user={props.user}
            users={props.users}
            img={props.img}
            dish={dish}

            addLike={props.addLike}
            removeLike={props.removeLike}
        />);

    return (
        <div className={s.container}>
            <Sort sortedBy={props.sortedBy}/>
            {catalogDOM}
        </div>
    )
};

export default Catalog;