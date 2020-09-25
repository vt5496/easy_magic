import React from "react";
import {connect} from "react-redux";
import Words from "./Words";

const mapStateToProps = state => ({
    words: state.finder.words,
    dishes: state.catalog.dishes
})


const WordsContainer = connect(mapStateToProps)(Words)

export default WordsContainer