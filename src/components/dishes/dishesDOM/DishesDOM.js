import React from "react";

const DishesDOM = ({dishes, buildMiniDishDOM,filterBy}) =>
    (filterBy) ?
        buildMiniDishDOM(filterBy.map(idDish => dishes.filter(d => idDish === d.idDish)[0])) :
        buildMiniDishDOM(dishes)


export default DishesDOM