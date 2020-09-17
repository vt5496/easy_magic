import React from "react";

import s from './catalog.module.css'
import Sort from "../../../someWhereUsesComp/SortBy/sortBy";
import MiniDishContainer from "../../../someWhereUsesComp/dishCard/miniDishCard/MiniDishContainer";

const Catalog = (props) => {

    let catalogDOM = props.catalog.pizza.map((dish, i) =>
         <MiniDishContainer
            key={i}
            dish={dish}
        />);

    return (
        <div className={s.container}>
            <Sort sortedBy={props.sortedBy}/>
            {catalogDOM}
        </div>
    )
};

export default Catalog;