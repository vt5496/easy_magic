import React from "react";

import s from './miniDish.module.css'

const MiniDish = (props) => {

    return (
        <div className={s.main}>
            <div className={s.title}>
                <span className={s.name}>{props.dish.name}</span>
            </div>
            <div className={s.description}>
                <div className={s.descriptionText}>
                    <div>
                        <span><strong>Cost</strong>: {props.dish.cost}grn</span>
                        <span><strong>Weight</strong>: {props.dish.weight}gr</span>
                    </div>
                    <div>
                        <span><strong>Composition</strong>: {props.dish.composition}</span>
                    </div>
                    <div>
                        star 0-5 <img className={s.like} src={props.imgLike} alt='Like'/>{props.dish.likes}
                    </div>
                </div>
                <div className={s.descriptionImg}>
                    <img src="" alt="imageDish"/>
                </div>
            </div>
        </div>
    )
}

export default MiniDish;