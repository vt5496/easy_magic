import {NavLink} from "react-router-dom";
import React from "react";


const ProfileMenu = () =>
    <div>
        <NavLink exact to="/profile/authorization">
            <button>Sign in</button>
        </NavLink>
        <NavLink exact to="/profile/registration">
            <button>Sign up</button>
        </NavLink>
    </div>

export default ProfileMenu;