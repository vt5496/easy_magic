import React from "react";
import {NavLink} from "react-router-dom";

import s from './profile.module.css'

const Profile = () =>{
    return(
        <div className={s.main}>
            <NavLink exact to="/authorization"><button>Sign in</button></NavLink>
            <NavLink exact to="/registration"><button>Sign up</button></NavLink>
        </div>
    )
};

export default Profile;