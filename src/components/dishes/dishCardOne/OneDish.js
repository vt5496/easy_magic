import React from "react";

import Comments from './comments/Comments'

import s from './OneDish.module.css';
import Descriptions from "../Descriptions/Descriptions";
import ButtonBack from "./buttonBack/ButtonBack";
import TitleImg from "./TitleImg/TitleImg";
import UserMenu from "./userMenu/UserMenu";

const OneDish = ({dish, history}) =>
    <div className={s.Dish}>
        <ButtonBack history={history}/>
        <TitleImg name={dish.name}
                  img={dish.img}/>
        <Descriptions composition={dish.composition}
                      weight={dish.weight}
                      cost={dish.cost} />
        <UserMenu dish={dish} />
        <Comments comments={dish.comments}/>
    </div>


export default OneDish;