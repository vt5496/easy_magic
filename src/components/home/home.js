import React from "react";

import Branded from "./branded/branded";
import Catalog from "./catalog/catalog";
import News from "./news/news";
import Sale from "./sale/sale";

import s from './home.module.css'

const Home = (props) => {
    return (
        <div className={s.main}>
            <h1>Добро пожаловать {props.state.user.name}</h1>
            <img src={props.state.user.img} alt=""/>
            <Catalog state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Home;