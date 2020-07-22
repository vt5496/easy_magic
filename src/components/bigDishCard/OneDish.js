import React from "react";

import Like from './likes/Like'
import AddComment from "./comments/addComment/AddComment";
import Comments from './comments/Comments'
import Share from "./share/share";

import s from './OneDish.module.css';
import Catalog from "../home/catalog/Catalog";

const OneDish = (props) => {
    return (
        <div className={s.Dish}>
            <div className={s.main}>
                <span className={s.name}>{props.dish.name}</span>
                <img src={props.dish.img} alt="img"/>
            </div>
            <div className={s.properties}>
                <span><strong>Composition</strong>: {props.dish.composition}</span>
                <span><strong>Weight</strong>: {props.dish.weight}gr</span>
                <span><strong>Cost</strong>: {props.dish.cost}grn</span>
            </div>
            <div className={s.userMenu}>
                <div className={s.like_share}>
                    <Share img={props.img} />
                    <Like user={props.user} dish={props.dish} imgLike={props.imgLike} img={props.img}
                          addLike={props.addLike} removeLike={props.removeLike}/>
                </div>
                <div className={s.addComment}>
                    <AddComment user={props.user} dish={props.dish}
                                readNewCommentText={props.readNewCommentText}
                                createReadNewCommentText={props.createReadNewCommentText}
                                addComment={props.addComment} />
                </div>
            </div>
            <div className={s.comments}>
                <Comments user={props.user} users={props.users} dish={props.dish}/>
            </div>
        </div>
    )
};

export default OneDish;