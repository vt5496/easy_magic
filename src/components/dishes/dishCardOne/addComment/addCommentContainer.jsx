import React from "react";
import {connect} from "react-redux";
import {createNewCommentObjectAC, readNewCommentTextAC} from "../../../../redux/user-reducer";
import {addCommentAC} from "../../../../redux/catalog-reducer";
import AddComment from "./AddComment";

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    sendInputValueToState: (text, idDish) => dispatch(readNewCommentTextAC(text, idDish)),
    createCommentObject: (text, idDish) => dispatch(createNewCommentObjectAC(text, idDish)),
    addComment: (user, dish) => dispatch(addCommentAC(user, dish))
})

const AddCommentContainer = connect(mapStateToProps, mapDispatchToProps)(AddComment)

export default AddCommentContainer;