import React from "react";
import s from './favorites.module.css';
import DishesDOMContainer from "../../dishes/dishesDOM/DishesDOMContainer";

const Favorites = ({likes}) =>
        <div className={s.List}>
            <DishesDOMContainer filterBy={likes} />
        </div>

export default Favorites;

