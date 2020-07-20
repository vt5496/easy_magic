import React from "react";

import s from './catalog.module.css'
import OneDish from "../../bigDishCard/OneDish";
import MiniDish from "../../miniDishCard/miniDish";

const Catalog = (props) => {

    let dishListt = props.state.catalog.map(dish => {
            return <OneDish state={props.state} dish={dish} dispatch={props.dispatch}/>
        });
    let dishList = props.state.catalog.map(dish => {
        return <MiniDish state={props.state} dish={dish} dispatch={props.dispatch}/>
    });

    return(
        <div className={s.List}>
            {dishListt}
            {dishList}
        </div>
    )
};

export default Catalog;