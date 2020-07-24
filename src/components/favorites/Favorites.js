import React from "react";

import OneDish from "../dishCard/bigDishCard/OneDish";

import s from './favorites.module.css';
import like from "../../img/heart.svg";


const Favorites = (props) => {

    let imgLike = like;
    let MainLikeFilter = props.catalog.map(dish => {
        if (props.user.likes.includes(dish.idDish)) {
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
        }
    });


    return (
        <div className={s.List}>
            {MainLikeFilter}
        </div>
    )
};

export default Favorites;

