import React from "react";
import {connect} from "react-redux";
import OneComment from "./OneComment";

const mapStateToProps = state =>  {
    const getUser = idUser =>
        state.users.filter(user => user.idUser === idUser)
    return({
        getUser
    })
}


const OneCommentContainer = connect(mapStateToProps)(OneComment)

export default OneCommentContainer