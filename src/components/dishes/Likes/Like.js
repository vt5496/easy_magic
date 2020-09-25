import React from "react";

import s from './like.module.css'


const Like = ({
                  userLikes, dish,
                  haveLike, getLikeImg,
                  addLike, removeLike
              }) =>
{
    const onLike = (e) => {
        e.stopPropagation();
        haveLike(userLikes) ? removeLike(dish.idDish) : addLike(dish.idDish)
    };
    return (
        <div className={s.main}>
            <img className={s.like} src={getLikeImg(userLikes)}
                 onClick={onLike} alt='Like'/>
            <span>{dish.likes}</span>
        </div>
    )
};

export default Like;