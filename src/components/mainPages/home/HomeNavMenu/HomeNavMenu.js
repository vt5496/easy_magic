import React from "react";

import s from './HomeNavMenu.module.css'
import {NavLink} from "react-router-dom";
import arrLeft from "../../../../img/keyboard_arrow_left.svg";
import arrRight from "../../../../img/keyboard_arrow_right.svg";

const HomeNavMenu = () =>
    <div className={s.main}>
        <NavLink className={s.newDish} exact to="/new">
            <div>New Dishs</div>
        </NavLink>
        <NavLink className={s.sales} exact to="/sales">
            <img className={s.arrLeft} src={arrLeft} alt=""/>
            <div>Sales</div>
            <img className={s.arrRight} src={arrRight} alt=""/>
        </NavLink>
        <NavLink className={s.catalog} exact to="/catalog">
            <div>Catalog</div>
        </NavLink>
        <NavLink className={s.exclusive} exact to="/exclusive">
            <div>Exclusive</div>
        </NavLink>
    </div>

export default HomeNavMenu;
