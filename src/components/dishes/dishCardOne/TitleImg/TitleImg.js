import React from "react";
import s from './TitleImg.module.css'

const TitleImg = ({name, img}) =>
    <div className={s.main}>
        <span>{name}</span>
        <img src={img} alt="img"/>
    </div>

export default TitleImg;
