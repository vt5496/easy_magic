import React from "react";

import s from './OneComment.module.css'

const OneComment = ({commentObj, getUser}) =>
        <div className={s.main}>
            <div className={s.user}>
                <img src={getUser(commentObj.idUser).img} alt="user image"/>
                <span>{getUser(commentObj.idUser)[0].name}</span>
            </div>
            <div className={s.comment}>{commentObj.value}</div>
        </div>

export default OneComment;