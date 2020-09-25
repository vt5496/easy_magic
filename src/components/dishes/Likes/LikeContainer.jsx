import React from "react";
import {connect} from "react-redux";
import Like from "./Like";
import {addLikeAC, removeLikeAC} from "../../../redux/catalog-reducer";
import like from "../../../img/heart.svg";
import likeO from "../../../img/heart-o.svg";

const mapStateToProps = (state, {dish}) => {
    const haveLike = likes =>
        typeof (likes.filter(idDish => idDish === dish.idDish)[0]) === "number"
    const getLikeImg = likes =>
        haveLike(likes) ? like : likeO
    return ({
        userLikes: state.user.likes,
        getLikeImg,
        haveLike
    })
}

const mapDispatchToProps = dispatch => ({
    addLike: (idDish) => dispatch(addLikeAC(idDish)),
    removeLike: (idDish) => dispatch(removeLikeAC(idDish)),
})

const LikeContainer = connect(mapStateToProps, mapDispatchToProps)(Like)

export default LikeContainer;