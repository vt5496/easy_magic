import React from "react";

import like from '../../../img/heart.svg'
import likeO from '../../../img/heart-o.svg'

import s from './like.module.css'
import {addLikeActionCreator, removeLikeActionCreator} from "../../../redux/catalog-reducer";

let img = likeO;

const Like = (props) => {
    let addLike = () => {
        if (props.user.likes.includes(props.dish.idDish) === false) {
            props.dispatch(addLikeActionCreator(props))
            img = like;
        } else {
            props.dispatch(removeLikeActionCreator(props))
            img = likeO
        }
    };


    return (
        <div>
            <img className={s.like} src={img} onClick={addLike} alt='Like'/>{props.dish.likes}
        </div>
    )
};

export default Like;