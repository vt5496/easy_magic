import React from "react";

import {addCommentActionCreator, readNewCommentTextActionCreator} from "../../../../redux/dish-reducer";

const AddComment = (props) => {

    let newCommentElement = React.createRef();
    let readNewCommentText = () => {
        let text = newCommentElement.current.value;
        props.dispatch(readNewCommentTextActionCreator(props, text));
    };

    let buttonAddComment = (event) => {event.preventDefault(); return props.dispatch(addCommentActionCreator(props))};

    let newCommentTextValue = () => {
        let newCommentTextObject = props.user.newCommentText.find(dish => dish.idDish === props.dish.idDish);
        if (newCommentTextObject) {
            return newCommentTextObject.value
        } else {
            return "";
        }
    }

    return (
        <div>
            <form action="">
                <input type="text" ref={newCommentElement} onChange={readNewCommentText} value={newCommentTextValue()}/>
                <button onClick={buttonAddComment}>Comment</button>
            </form>
        </div>
    )
};

export default AddComment;