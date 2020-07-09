import React from "react";

import s from './like.module.css'
import {addLikeActionCreator} from "../../../redux/dish-reducer";



const Like = (props) => {

    let addLike = () => {
        props.dispatch(addLikeActionCreator(props))
    };


    return (
        <div>
            <button onClick={addLike} >Like {props.dish.likes}</button>
        </div>
    )
};

export default Like;