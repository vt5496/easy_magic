import React from "react";

import {addFavActionCreator} from '../../../redux/dish-reducer'

import favoriteImgO from '../../../img/star-o.svg'
import favoriteImg from '../../../img/star.svg'

import s from './favorite.module.css';

const addFavorite = (props) => {
const addFav = () => {
    props.dispatch(addFavActionCreator(props))
}

    return(
        <div>
            <img className={s.favorite} src={props.img.favoriteO} onClick={addFav} alt='Favorite'/>{props.dish.fav}
        </div>
    )
}

export default addFavorite;