import React from "react";

import OneComment from './oneComment/oneComment';

import s from './comments.module.css';

const Comments = (props) => {
    let arrComments = props.dish.comments.map(comment => <OneComment user={props.user} value={comment.value}/>)
    return (<div>
            {arrComments}
        </div>
    )
};

export default Comments;

