import React, {createRef} from "react";

import s from './catalog.module.css'
import OneDish from "../../dishCard/bigDishCard/OneDish";
import MiniDish from "../../dishCard/miniDishCard/MiniDish";
import like from "../../../img/heart.svg";
import likeO from "../../../img/heart-o.svg";

const Catalog = (props) => {
    let imgLike = likeO;

    let dishListt = props.catalog.pizza.map((dish, i) => {
        if (props.user.likes.includes(dish.idDish) === true) {
            imgLike = like;
        } else {
            imgLike = likeO
        }

        return <OneDish
            key={i}

            user={props.user}
            users={props.users}
            img={props.img}
            dish={dish}

            imgLike={imgLike}

            addLike={props.addLike}
            removeLike={props.removeLike}

            readNewCommentText={props.readNewCommentText}
            createReadNewCommentText={props.createReadNewCommentText}

            addComment={props.addComment}
        />
    });


    let dishList = props.catalog.pizza.map((dish, i) => {
        (props.user.likes.includes(dish.idDish) === true) ?
            imgLike = like :
            imgLike = likeO;

        return <MiniDish
            key={i}

            user={props.user}
            users={props.users}
            img={props.img}
            dish={dish}
            imgLike={imgLike}

            addLike={props.addLike}
            removeLike={props.removeLike}
        />
    });

    const Sort = () => {
       return (
           <div>sort by:
            <select ref={selectValue} value={props.sortBy} onChange={onSortedBy}>
                <option value='name'>Name</option>
                <option value='cost'>Cost</option>
            </select>
        </div>
       )
    }

    let selectValue = React.createRef();
    const onSortedBy = () => props.sortedBy(selectValue.current.value)

    return (
        <div className={s.container}>
            <Sort />
            {dishList}
        </div>
    )
};

export default Catalog;