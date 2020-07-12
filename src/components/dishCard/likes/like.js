import React from "react";

import s from './like.module.css'
import {addLikeActionCreator} from "../../../redux/dish-reducer";

const Like = (props) => {

    let addLike = () => {
        props.dispatch(addLikeActionCreator(props))
    };



    return (
        <div>
            <img className={s.like}  src={props.img.likeO} onClick={addLike} alt='Like' />{props.dish.likes}
        </div>
    )
};

export default Like;