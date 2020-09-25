import React from "react";

import s from './words.module.css'
import {withRouter} from "react-router-dom";


const Words = ({words, dishes, history}) =>
    words.map(idDish => dishes.filter(d => idDish === d.idDish)[0])
        .map((d, i) =>
            <div className={s.word} onClick={() => history.push(`/catalog/${d.idDish}`)} key={i}>
                {d.name}
            </div>)

export default withRouter(Words);