import React from "react";
import OneDishContainer from "../OneDishContainer";



const UniqueIDHeader = ({match}) => <OneDishContainer idDish={+match.params.id} />

export default UniqueIDHeader;