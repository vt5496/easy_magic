import React from "react";

import s from './oneComment.module.css'

const OneComment = (props) => {
    return (
        <div className={s.structure}>
            <div className={s.user}>
                <img src={props.user.img} alt="user image"/>
                <span>{props.user.name}</span>
            </div>
            <div className={s.comment}>{props.value}</div>
        </div>
    )
};

export default OneComment;