import React from "react";
import {withRouter} from 'react-router-dom'

import s from './miniDish.module.css'
import Descriptions from "../Descriptions/Descriptions";
import LikeContainer from "../Likes/LikeContainer";


const MiniDish = ({dish, history}) =>
    <div className={s.main} onClick={() => history.push(`/catalog/${dish.idDish}`)}>
        <div className={s.title}>
            <span className={s.name}>{dish.name}</span>
        </div>
        <div className={s.description}>
            <Descriptions composition={dish.composition}
                          weight={dish.weight}
                          cost={dish.cost} />
            <div>
                <img className={s.descriptionImg} src={dish.img} alt="imageDish"/>
            </div>
        </div>
        <LikeContainer dish={dish}/>
    </div>

export default withRouter(MiniDish);