import React from "react";

import Like from './likes/like'
import AddComment from "./comments/addComment/addComment";
import Comments from './comments/comments'

import s from './OneDish.module.css';

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
            <div className={s.like_comment}>
                <Like dish={props.dish} dispatch={props.dispatch} />
                <AddComment user={props.user} dish={props.dish} dispatch={props.dispatch}/>
            </div>
            <div className={s.comments}>
                <Comments user={props.user} dish={props.dish}/>
            </div>
        </div>
    )
};

export default OneDish;