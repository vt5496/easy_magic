import React, {createRef} from "react";

import {readNewSearchTextActionCreator} from "../../redux/search-reducer";
import OneDish from "../bigDishCard/OneDish";

import s from './search.module.css'

const Search = (props) => {

    let newFindElement = React.createRef();
    let readNewSearchText = () => {
        let text = newFindElement.current.value;
        props.dispatch(readNewSearchTextActionCreator(props, text))
    }
    let newSearchTextValue = props.state.user.searchText;

    let searchFilter = props.state.catalog.map(dish => {
        if (props.state.user.search.includes(dish.idDish)) {
            return <OneDish state={props.state} dish={dish} dispatch={props.dispatch}/>
        }

        return (
        <div className={s.List}>
            <input type="text" ref={newFindElement} onChange={readNewSearchText} value={newSearchTextValue}/>
            {searchFilter}
        </div>
    );
})
}

export default Search;
