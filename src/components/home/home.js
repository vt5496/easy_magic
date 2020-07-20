import React from "react";

import Catalog from "./catalog/catalog";

import arrLeft from '../../img/keyboard_arrow_left.svg'
import arrRight from '../../img/keyboard_arrow_right.svg'

import s from './home.module.css'
import Footer from "../footer/footer";
import {NavLink} from "react-router-dom";

const Home = (props) => {
    return (
        <div className={s.container}>
            <div className={s.main}>
                <div className={s.head}>
                    <div className={s.title}>
                        <h1>Welcome {props.state.user.login}</h1>
                        <h2>{props.state.user.fullName} </h2>
                    </div>
                    <img src={props.state.user.img} alt=""/>
                </div>
                <div className={s.quote}>
                    "Just sasat now" by vt5496
                </div>
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
                <Footer/>
            </div>
        </div>
    )
}

export default Home;