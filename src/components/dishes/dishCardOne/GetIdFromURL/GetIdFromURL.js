import React from "react";
import OneDishContainer from "../OneDishContainer";



const GetIdFromURL = ({match}) => <OneDishContainer idDish={+match.params.id} />

export default GetIdFromURL;