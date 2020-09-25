import React from "react";
import s from './UserMenu.module.css'
import Share from "../share/share";
import LikeContainer from "../../Likes/LikeContainer";
import AddCommentContainer from "../addComment/addCommentContainer";

const UserMenu = ({dish}) =>
    <div className={s.userMenu}>
        <div className={s.like_share}>
            <Share />
            <LikeContainer dish={dish} />
        </div>
        <AddCommentContainer dish={dish} />
    </div>

export default UserMenu;