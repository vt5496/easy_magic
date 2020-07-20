import React from "react";

import {
    readNewCommentTextActionCreator,
    createReadNewCommentTextActionCreator
} from "../../../../redux/user-reducer";
import {addCommentActionCreator} from "../../../../redux/catalog-reducer";


const AddComment = (props) => {
        let newCommentElement = React.createRef();
        let readNewCommentText = () => {
            let text = newCommentElement.current.value;
            let userNewTextObject = props.user.newCommentText.find(dish => dish.idDish === props.dish.idDish);
            console.log(userNewTextObject)
            if (userNewTextObject) {
                props.dispatch(readNewCommentTextActionCreator(props, text));
            } else {
                props.dispatch(createReadNewCommentTextActionCreator(props, text))
            }
        };

        let buttonAddComment = (event) => {
            event.preventDefault();
            let newCommentTextObject = props.user.newCommentText.find(dish => dish.idDish === props.dish.idDish);
            if (newCommentTextObject) {
                if (newCommentTextObject.value.trim()) {
                    return props.dispatch(addCommentActionCreator(props))
                } else {
                    return ({type: 'undefined'})
                }
            } else {
                return ({type: 'undefined'})
            }
        };

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
                    <input type="text" ref={newCommentElement} onChange={readNewCommentText}
                           value={newCommentTextValue()}/>
                    <button onClick={buttonAddComment}>Comment</button>
                </form>
            </div>
        )
    }
;

export default AddComment;