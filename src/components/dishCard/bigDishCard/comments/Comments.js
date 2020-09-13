import React from "react";

import OneComment from './oneComment/OneComment';

import s from './comments.module.css';

const Comments = (props) => {
    let arrComments = props.dish.comments.map((comment, i) =>
        <OneComment
            key={i}
            users={props.users}
            comment={comment}/>)
    return (<div>
            {arrComments}
        </div>
    )
};

export default Comments;

