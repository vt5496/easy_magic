import React from "react";

import s from './HomeHeader.module.css'

const HomeHeader = ({user}) =>
    <div className={s.main}>
        <div className={s.head}>
            <div className={s.title}>
                <h1>Welcome {user.login}</h1>
                <h2>{user.fullName} </h2>
            </div>
            <img src={user.img} alt=""/>
        </div>
        <div className={s.quote}>
            {`"DW with MM", "MW", "MR"
                    by vt5496`}
        </div>
    </div>

export default HomeHeader