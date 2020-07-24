import React, {createRef} from "react";

import OneDish from "../dishCard/bigDishCard/OneDish";


import s from './Finder.module.css'
import like from "../../img/heart.svg";
import likeO from "../../img/heart-o.svg";

const Finder = (props) => {

    let newFinderElement = React.createRef();
    let readNewFinderText = () => {
        let text = newFinderElement.current.value;
        props.readNewFinderText(text)
    }
    let newFinderTextValue = props.user.finderText;
    let imgLike = likeO;

    let finderDishsCatalog = props.catalog.map(dish => {
        if (props.finder.includes(dish.idDish)) {

            if (props.user.likes.includes(dish.idDish) === true) {
                imgLike = like;
            } else {
                imgLike = likeO
            }

            return <OneDish
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
        }
    })

    let finderDishs = (event) => {
        event.preventDefault();
        props.emptyFinder();
        props.catalog.map(dish => {
            let text = newFinderElement.current.value;
            if (dish.name.toLowerCase().includes(text.toLowerCase())) {
                props.finderDishs(dish)
            }
        })
    }

    return (
        <div className={s.List}>
            <form action="">
                <input type="text" ref={newFinderElement} onChange={readNewFinderText} value={newFinderTextValue}/>
                <button onClick={finderDishs}>Find</button>
            </form>
            {finderDishsCatalog}
        </div>
    );
}

export default Finder;
