import React from "react";

import s from './catalog.module.css'
import Sort from "../../../someWhereUsesComp/SortBy/sortBy";
import DishesDOMContainer from "../../../dishes/dishesDOM/DishesDOMContainer";

const Catalog = ({sortedBy}) =>
        <div className={s.container}>
            <Sort sortedBy={sortedBy}/>
            <DishesDOMContainer />
        </div>

export default Catalog;