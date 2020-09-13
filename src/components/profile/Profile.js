import React from "react";
import {NavLink} from "react-router-dom";

import s from './profile.module.css'

const Profile = () =>{
    return(
        <div className={s.main}>
            <NavLink exact to="/profile/authorization"><button>Sign in</button></NavLink>
            <NavLink exact to="/profile/registration"><button>Sign up</button></NavLink>
        </div>
    )
};

export default Profile;