import React from "react";
import {NavLink} from "react-router-dom";

import home from '../../../img/home.svg'
import favorites from '../../../img/star_outline.svg'
import search from '../../../img/search.svg'
import shopcart from '../../../img/local_grocery_store.svg'
import profile from '../../../img/person_outline.svg'

import s from './Nav.module.css';



const Nav = () =>
        <div>
            <ul className={s.NavBar}>
                <li><NavLink exact strict to="/" activeClassName={s.active}><img src={home} alt="Home"/></NavLink></li>
                <li><NavLink exact to="/favorites" activeClassName={s.active}><img src={favorites} alt="Favorites"/></NavLink></li>
                <li><NavLink exact to="/finder" activeClassName={s.active}><img src={search} alt="Search"/></NavLink></li>
                <li><NavLink exact to="/shopcart" activeClassName={s.active}><img src={shopcart} alt="Catalog"/></NavLink></li>
                <li><NavLink exact to="/profile" activeClassName={s.active}><img src={profile} alt="Profile"/></NavLink></li>
            </ul>
        </div>

export default Nav;

