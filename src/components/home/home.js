import React from "react";

import Branded from "./branded/branded";
import Catalog from "./catalog/catalog";
import News from "./news/news";
import Sale from "./sale/sale";

import s from './home.module.css'

const Home = (props) => {
    return (
        <div className={s.main}>
            <div className={s.head}>
                <div className={s.title}>
                    <h1>Welcome {props.state.user.login}</h1>
                    <h2>{props.state.user.fullName} </h2>
                </div>
                <img src={props.state.user.img} alt=""/>
            </div>
            <Catalog state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Home;