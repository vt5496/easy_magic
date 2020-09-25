import React from "react";

import s from './AddComment.module.css'

const AddComment = ({
                        user, dish,
                        sendInputValueToState, createCommentObject,
                        addComment
                    }) => {
    const inputRef = React.createRef();
    const getRefValue = ref => ref.current.value;

    const getCommentObject = idDish =>
        user.newCommentText.filter(d => d.idDish === idDish)[0]
    const getInputValueFromState = idDish =>
        getCommentObject(idDish) ? getCommentObject(idDish).value : "";

    const onReadInput = () =>
        getCommentObject(dish.idDish) ?
            sendInputValueToState(getRefValue(inputRef), dish.idDish) :
            createCommentObject(getRefValue(inputRef), dish.idDish)
    const onAddComment = (e) => {
        e.preventDefault();
        if (getCommentObject(dish.idDish) && getCommentObject(dish.idDish).value.trim())
            addComment(user, dish)
    };

    return (
        <div className={s.addComment}>
            <form onSubmit={onAddComment} action="">
                <input type="text" ref={inputRef}
                       onChange={onReadInput}
                       value={getInputValueFromState(dish.idDish)}/>
                <button>Comment</button>
            </form>
        </div>
    )
};

export default AddComment;