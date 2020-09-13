import React from "react";

import OneDish from "../dishCard/bigDishCard/OneDish";

import s from './favorites.module.css';
import like from "../../img/heart.svg";


const Favorites = (props,
                   {catalog, user, users, img,
                       addLike, removeLike,
                       readNewCommentText, createReadNewCommentText,
                       addComment}) => {


    let MainLikeFilter = props.catalog.pizza.map((dish, i) => {

        if (props.user.likes.includes(dish.idDish)) {
            return <OneDish
                key={i}

                user={props.user}
                users={props.users}
                img={props.img}
                dish={dish}

                imgLike={like}

                addLike={props.addLike}
                removeLike={props.removeLike}

                readNewCommentText={props.readNewCommentText}
                createReadNewCommentText={props.createReadNewCommentText}

                addComment={props.addComment}
            />
        }
    });


    return (
        <div className={s.List}>
            {MainLikeFilter}
        </div>
    )
};

export default Favorites;

