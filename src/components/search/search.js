import React from "react";

import s from './search.module.css'
import OneDish from "../dishCard/OneDish";
import {readNewFindTextActionCreator} from "../../redux/store";

const Search = (props) =>{

    let newFindElement = React.createRef();
    let readNewFindText = () => {
        let text = newFindElement.current.value;
        props.dispatch(readNewFindTextActionCreator(text));
    };



    let buttonLetFind = () =>{
        let findList = props.catalog.map(dish => {
            if (dish.name === props.findText) {
               return dish;
            }
        });
        console.log(findList)
    };
    let searchFilter = buttonLetFind();


    return(
        <div className={s.List}>
            <input type="text" ref={newFindElement} onChange={readNewFindText} value={props.newFindText}/>
            <button onClick={buttonLetFind}>Let find</button>
            {searchFilter}
        </div>
    )
};

export default Search;