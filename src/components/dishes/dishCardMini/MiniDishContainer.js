import React from "react";
import {connect} from "react-redux";
import MiniDish from "./MiniDish";


const MiniDishContainer = connect()(MiniDish)

export default MiniDishContainer;