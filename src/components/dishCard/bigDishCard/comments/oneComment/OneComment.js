import React from "react";

import s from './oneComment.module.css'

const OneComment = (props) => {
    let user = props.users.filter(user => user.idUser === props.comment.idUser)

    return (
        <div className={s.structure}>
            <div className={s.user}>
                <img src={user.img} alt="user image"/>
                <span>{user[0].name}</span>
            </div>
            <div className={s.comment}>{props.comment.value}</div>
        </div>
    )
};

export default OneComment;