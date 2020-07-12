import React from "react";

import s from './addComment.module.css';
import {addCommentActionCreator, readNewCommentTextActionCreator} from "../../../../redux/dish-reducer";

const AddComment = (props) =>{

    let newCommentElement = React.createRef();
    let readNewCommentText = () => {
        let text = newCommentElement.current.value;
        props.dispatch(readNewCommentTextActionCreator(props, text));
    };

    let buttonAddComment = () => props.dispatch(addCommentActionCreator(props));

    let newCommentTextValue = () => {
        let newCommentTextObject = props.user.newCommentText.find(dish => dish.idDish === props.dish.idDish);
        if (newCommentTextObject) {
            return  newCommentTextObject.value
        } else {
            return "";
        }
    }

    return (
        <div>
            <input type="text" ref={newCommentElement} onChange={readNewCommentText} value={newCommentTextValue()}/>
            <button onClick={buttonAddComment}>Add comment</button>
        </div>
    )
};

export default AddComment;