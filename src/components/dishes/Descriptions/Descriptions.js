import React from "react";

import s from './Descriptions.module.css'

const Descriptions = ({composition, weight, cost}) =>
    <div className={s.descriptions}>
        <span><strong>Composition</strong>: {composition}</span>
        <span><strong>Weight</strong>: {weight}gr</span>
        <span><strong>Cost</strong>: {cost}grn</span>
    </div>

export default Descriptions;