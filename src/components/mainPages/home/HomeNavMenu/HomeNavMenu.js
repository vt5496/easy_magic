import React from "react";

import s from './HomeNavMenu.module.css'
import {Link} from "react-router-dom";
import arrLeft from "../../../../img/keyboard_arrow_left.svg";
import arrRight from "../../../../img/keyboard_arrow_right.svg";

const HomeNavMenu = () =>
    <div className={s.main}>
        <Link className={s.newDish} exact to="/new">
            <div>New Dishs</div>
        </Link>
        <Link className={s.sales} exact to="/sales">
            <img className={s.arrLeft} src={arrLeft} alt=""/>
            <div>Sales</div>
            <img className={s.arrRight} src={arrRight} alt=""/>
        </Link>
        <Link className={s.catalog} exact to="/catalog">
            <div>Catalog</div>
        </Link>
        <Link className={s.exclusive} exact to="/exclusive">
            <div>Exclusive</div>
        </Link>
    </div>

export default HomeNavMenu;
