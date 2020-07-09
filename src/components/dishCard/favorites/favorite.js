import React from "react";

import {addFavActionCreator} from '../../../redux/dish-reducer'

import s from './favorite.module.css';

const addFavorite = (props) => {
const addFav = () => {
    props.dispatch(addFavActionCreator(props))
}

    return(
        <div>
            <button onClick={addFav}>Star</button>
        </div>
    )
}

export default addFavorite;