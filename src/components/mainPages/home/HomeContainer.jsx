import React from "react";

import {connect} from "react-redux";
import Home from "./Home";

let mapStateToProps = state => ({
    user: state.user
})

let HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;