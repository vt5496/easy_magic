import React from "react";

import s from './miniDish.module.css'
import Like from "./likes/Like";
import likeO from "../../../img/heart-o.svg";
import like from "../../../img/heart.svg";


const MiniDish = (props) => {

    let imgLike = likeO
    if (props.user.likes.includes(props.dish.idDish) === true) imgLike = like;

    return (
        <div className={s.main}>

            <div className={s.title}>
                <span className={s.name}>{props.dish.name}</span>
            </div>

            <div className={s.description}>

                <div className={s.descriptionText}>
                    <div>
                        <div><strong>Cost</strong>: {props.dish.cost}grn</div>
                        <div><strong>Weight</strong>: {props.dish.weight}gr</div>
                    </div>
                    <div>
                        <span><strong>Composition</strong>: {props.dish.composition}</span>
                    </div>
                </div>

                <div>
                    <img className={s.descriptionImg} src={props.dish.img} alt="imageDish"/>
                </div>

            </div>

            <div className={s.like}>
                star 0-5
                <Like user={props.user} dish={props.dish} imgLike={imgLike} img={props.img}
                      addLike={props.addLike} removeLike={props.removeLike}/>
            </div>
        </div>
    )
}

export default MiniDish;