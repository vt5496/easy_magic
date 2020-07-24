import React from "react";

import s from './like.module.css'


const Like = (props) => {
    let onLike = () => {
        if (props.user.likes.includes(props.dish.idDish) === false) {
            props.addLike(props.dish);
        } else {
            props.removeLike(props.dish);
        }
    };


    return (
        <div>
            <img className={s.like} src={props.imgLike} onClick={onLike} alt='Like'/>{props.dish.likes}
        </div>
    )
};

export default Like;