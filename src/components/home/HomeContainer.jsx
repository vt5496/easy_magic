import React from "react";

import {connect} from "react-redux";
import Home from "./Home";

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
let mapDispatchToProps = () => {
    return {}
}

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;