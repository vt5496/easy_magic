import React from "react";

import s from './comments.module.css';
import OneCommentContainer from "./oneComment/OneCommentContainer";

const Comments = ({comments}) => {
    const ArrComments = () => comments.map((commentObj, i) =>
        <OneCommentContainer key={i} commentObj={commentObj}/>)

    return (<div className={s.comments}>
            <ArrComments  />
        </div>)
};

export default Comments;

