import React from "react";

import s from './miniDish.module.css'

const MiniDish = (props) => {

    return (
        <div>
            <div>
                <div>
                    <span className={s.name}>{props.dish.name}</span>
                </div>
                <div>
                    <span><strong>Cost</strong>: {props.dish.cost}grn</span>
                    <span><strong>Weight</strong>: {props.dish.weight}gr</span>
                </div>
                <div>
                    <span><strong>Composition</strong>: {props.dish.composition}</span>
                </div>
                <div>
                    star 0-5 <img className={s.like}  src={props.state.img.likeO} alt='Like' />{props.dish.likes}
                </div>
            </div>
        </div>
    )
}

export default MiniDish;