import React from "react";

import s from './catalog.module.css'
import OneDish from "../../dishCard/bigDishCard/OneDish";
import MiniDish from "../../dishCard/miniDishCard/MiniDish";
import like from "../../../img/heart.svg";
import likeO from "../../../img/heart-o.svg";

const Catalog = (props) => {
    let imgLike = likeO;
    let dishListt = props.catalog.map(dish => {
        if (props.user.likes.includes(dish.idDish) === true) {
            imgLike = like;
        } else {
            imgLike = likeO
        }

        return <OneDish
            user={props.user}
            users={props.users}
            img={props.img}
            dish={dish}

            imgLike={imgLike}

            addLike={props.addLike}
            removeLike={props.removeLike}

            readNewCommentText={props.readNewCommentText}
            createReadNewCommentText={props.createReadNewCommentText}

            addComment={props.addComment}
        />
    });


    let dishList = props.catalog.map(dish => {
        return <MiniDish
            user={props.user}
            users={props.users}
            img={props.img} dish={dish}
            imgLike={imgLike}

            addLike={props.addLike}
            removeLike={props.removeLike}
        />
    });

    return (
        <div className={s.container}>
            {dishListt}
            {dishList}
        </div>
    )
};

export default Catalog;