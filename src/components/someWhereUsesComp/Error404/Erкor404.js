import React from "react";

import s from './Error404.module.css'

const Error404 = ({location}) =>
    <div className={s.main}>
        ERROR 404. Page '{location.pathname}' is not fined!
    </div>

export default Error404;