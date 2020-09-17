import React from "react";
import {connect} from "react-redux";
import MiniDish from "./MiniDish";
import {addLikeAC, removeLikeAC} from "../../../../redux/catalog-reducer";
import likeO from "../../../../img/heart-o.svg";
import like from "../../../../img/heart.svg";

const mapStateToProps = (state, {dish}) => {
    let imgLike = likeO
    if (state.user.likes.includes(dish.idDish) === true) imgLike = like;
    return ({
        user: state.user,
        img: state.img,
        imgLike: imgLike
    })
}

const mapDispatchToProps = dispatch => ({
    addLike: (dish) => dispatch(addLikeAC(dish)),
    removeLike: (dish) => dispatch(removeLikeAC(dish))
})

const MiniDishContainer = connect(mapStateToProps, mapDispatchToProps)(MiniDish)

export default MiniDishContainer;