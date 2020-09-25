import React from "react";
import s from './ButtonBack.module.css'

const ButtonBack = ({history}) =>
    <button className={s.buttonBack}
            onClick={history.goBack}>Back
    </button>

export default ButtonBack;
