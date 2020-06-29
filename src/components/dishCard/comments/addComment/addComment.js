import React from "react";

import s from './addComment.module.css';
import {addCommentActionCreator, readNewCommentTextActionCreator} from "../../../../redux/store";




const AddComment = (props) =>{

    let newCommentElement = React.createRef();
    let readNewCommentText = () => {
        let text = newCommentElement.current.value;
        props.dispatch(readNewCommentTextActionCreator(props, text));
    };

    let buttonAddComment = () => props.dispatch(addCommentActionCreator(props));

    return (
        <div>
            <input type="text" ref={newCommentElement} onChange={readNewCommentText} value={props.dish.newCommentText}/>
            <button onClick={buttonAddComment}>Add comment</button>
        </div>
    )
};

export default AddComment;