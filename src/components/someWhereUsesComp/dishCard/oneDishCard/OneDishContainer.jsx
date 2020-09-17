import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {addCommentAC, addLikeAC, removeLikeAC} from "../../../../redux/catalog-reducer";
import OneDish from "./OneDish";
import {createReadNewCommentTextAC, readNewCommentTextAC} from "../../../../redux/user-reducer";
import {compose} from "redux";
import likeO from "../../../../img/heart-o.svg";
import like from "../../../../img/heart.svg";

const mapStateToProps = (state, {idDish}) => {

    const getFirstArrItem = arr => arr[0]
    const filterArrById = (arr, id) =>
        arr.filter(dish => dish.idDish === id)
    const findById = compose(getFirstArrItem, filterArrById)

    let imgLike = likeO
    if (state.user.likes.includes(idDish) === true) imgLike = like;
    return ({
        catalog: state.catalog,
        user: state.user,
        img: state.img,
        users: state.users,
        dish: findById(state.catalog.pizza, idDish),
        imgLike: imgLike
    })
}
const mapDispatchToProps = dispatch => ({
    addLike: (dish) => dispatch(addLikeAC(dish)),
    removeLike: (dish) => dispatch(removeLikeAC(dish)),

    readNewCommentText: (props, text, dish) => dispatch(readNewCommentTextAC(props, text, dish)),
    createReadNewCommentText: (props, text, dish) => dispatch(createReadNewCommentTextAC(props, text, dish)),

    addComment: (props, dish) => dispatch(addCommentAC(props, dish))
})

const OneDishContainer = connect(mapStateToProps, mapDispatchToProps)(OneDish)

export default withRouter(OneDishContainer);