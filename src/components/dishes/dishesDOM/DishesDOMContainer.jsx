import React from "react";
import {connect} from "react-redux";
import DishesDOM from "./DishesDOM";
import MiniDishContainer from "../dishCardMini/MiniDishContainer";


const buildMiniDishDOM = arr =>
    arr.map((dish, i) => <MiniDishContainer key={i} dish={dish}/>)

const mapStateToProps = state => ({
    dishes: state.catalog.dishes,
    buildMiniDishDOM
})

const DishesDOMContainer = connect(mapStateToProps)(DishesDOM)

export default DishesDOMContainer