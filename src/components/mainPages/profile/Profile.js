import React from "react";
import {Route} from "react-router-dom";

import s from './profile.module.css'
import AuthorizationContainer from "./authorization/AuthorizationContainer";
import RegistrationContainer from "./registration/RegistrationContainer";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const Profile = () => {
    return (
        <div className={s.main}>
           <Route component={ProfileMenu} />
            <div>
                <Route path='/profile/authorization' component={AuthorizationContainer}/>
                <Route path='/profile/registration' component={RegistrationContainer}/>
            </div>
        </div>
    )
};

export default Profile;