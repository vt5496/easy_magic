import React from "react";

const AddComment = (props) => {
        let newCommentElement = React.createRef();
        let readNewCommentText = () => {
            let text = newCommentElement.current.value;
            let userNewTextObject = props.user.newCommentText.find(dish => dish.idDish === props.dish.idDish);
            console.log(userNewTextObject)
            if (userNewTextObject) {
                props.readNewCommentText(text, props.dish);
            } else {
                props.createReadNewCommentText(text, props.dish)
            }
        };

        let onButtonAddComment = (event) => {
            event.preventDefault();
            let newCommentTextObject = props.user.newCommentText.find(dish => dish.idDish === props.dish.idDish);
            if (newCommentTextObject) {
                if (newCommentTextObject.value.trim()) {
                    return props.addComment(props, props.dish)
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
                    <button onClick={onButtonAddComment}>Comment</button>
                </form>
            </div>
        )
    }
;

export default AddComment;