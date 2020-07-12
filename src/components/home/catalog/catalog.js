import React from "react";

import s from './catalog.module.css'
import OneDish from "../../dishCard/OneDish";

const Catalog = (props) => {

    let dishList = props.state.catalog.map(dish => {
            return <OneDish user={props.state.user} users={props.state.users} dish={dish} dispatch={props.dispatch}/>
        });

    return(
        <div className={s.List}>
            {dishList}
        </div>
    )
};

export default Catalog;