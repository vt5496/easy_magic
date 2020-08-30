import React from "react";

const AddComment = (props) => {
        let newCommentElement = React.createRef();
        let readNewCommentText = () => {
            let text = newCommentElement.current.value;
            let userNewTextObject = props.user.newCommentText.find(dish => dish.idDish === props.dish.idDish);
            userNewTextObject ?
                props.readNewCommentText(text, props.dish) :
                props.createReadNewCommentText(text, props.dish)
        };

        let onButtonAddComment = (e) => {
            e.preventDefault();
            let newCommentTextObject = props.user.newCommentText.find(dish => dish.idDish === props.dish.idDish);
            if (newCommentTextObject && newCommentTextObject.value.trim()) {
                    return props.addComment(props, props.dish)
            }
        };

        let newCommentTextValue = () => {
            let newCommentTextObject = props.user.newCommentText.find(dish => dish.idDish === props.dish.idDish);
            return newCommentTextObject ? newCommentTextObject.value : "";
        }

        return (
            <div>
                <form action="">
                    <input type="text" ref={newCommentElement}
                           onChange={readNewCommentText}
                           value={newCommentTextValue()}/>
                    <button onClick={onButtonAddComment}>Comment</button>
                </form>
            </div>
        )
    }
;

export default AddComment;