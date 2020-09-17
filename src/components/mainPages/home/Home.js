import React from "react";


import arrLeft from '../../../img/keyboard_arrow_left.svg'
import arrRight from '../../../img/keyboard_arrow_right.svg'

import s from './home.module.css'
import Footer from "../../someWhereUsesComp/footer/Footer";
import HomeNavMenu from "./HomeNavMenu/HomeNavMenu";
import HomeHeader from "./HomeHeader/HomeHeader";

const Home = props =>
        <div className={s.container}>
            <div className={s.main}>
                <HomeHeader user={props.user}/>
                <HomeNavMenu />
                <Footer />
            </div>
        </div>

export default Home;