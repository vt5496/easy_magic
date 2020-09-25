import React from "react";

import s from './home.module.css'
import HomeNavMenu from "./HomeNavMenu/HomeNavMenu";
import HomeHeader from "./HomeHeader/HomeHeader";

const Home = ({user}) =>
            <div className={s.main}>
                <HomeHeader user={user}/>
                <HomeNavMenu />
            </div>

export default Home;