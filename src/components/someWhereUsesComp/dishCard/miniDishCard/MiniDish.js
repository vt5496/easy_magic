import React from "react";
import {withRouter} from 'react-router-dom'

import s from './miniDish.module.css'
import Like from "./likes/Like";


const MiniDish = (props) =>
        <div className={s.main} onClick={() => props.history.push(`/${props.dish.idDish}`)}>

            <div className={s.title}>
                <span className={s.name}>{props.dish.name}</span>
            </div>

            <div className={s.description}>

                <div className={s.descriptionText}>
                    <div>
                        <div><strong>Cost</strong>: {props.dish.cost}grn</div>
                        <div><strong>Weight</strong>: {props.dish.weight}gr</div>
                    </div>
                    <div>
                        <span><strong>Composition</strong>: {props.dish.composition}</span>
                    </div>
                </div>

                <div>
                    <img className={s.descriptionImg} src={props.dish.img} alt="imageDish"/>
                </div>

            </div>

            <div className={s.like}>
                star 0-5
                <Like user={props.user} dish={props.dish} imgLike={props.imgLike} img={props.img}
                      addLike={props.addLike} removeLike={props.removeLike}/>
            </div>
        </div>

export default withRouter(MiniDish);