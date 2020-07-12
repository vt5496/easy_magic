import React from "react";

import Favorite from './favorites/favorite';
import Like from './likes/like'
import AddComment from "./comments/addComment/addComment";
import Comments from './comments/comments'
import Share from "./share/share";

import s from './OneDish.module.css';

const OneDish = (props) => {
    return (
        <div className={s.Dish}>
            <div className={s.favorite}>
                <Favorite dish={props.dish} img={props.state.img} dispatch={props.dispatch}/>
            </div>
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
                    <Share img={props.state.img} />
                    <Like dish={props.dish} img={props.state.img} dispatch={props.dispatch}/>
                </div>
                <div className={s.addComment}>
                    <AddComment user={props.state.user} dish={props.dish} dispatch={props.dispatch}/>
                </div>
            </div>
            <div className={s.comments}>
                <Comments user={props.state.user} users={props.state.users} dish={props.dish}/>
            </div>
        </div>
    )
};

export default OneDish;