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
        props.emptyFinder();
        return (text) ?
            props.catalog.map(dish => {
                if (dish.name.toLowerCase().includes(text.toLowerCase())) {
                    props.finderDishs(dish)
                }
            }) :
            props.emptyFinder()
    }
    let newFinderTextValue = props.user.finderText;

    let onFinderDishs = (e) => {
        e.preventDefault();
        props.emptyFinder();
        let text = newFinderElement.current.value;
        return (newFinderElement.current.value) ?
            props.catalog.map(dish => {
                if (dish.name.toLowerCase().includes(text.toLowerCase())) {
                    props.finderDishs(dish)
                }
            }) :
            props.emptyFinder()
    }

    let imgLike = likeO;

    let finderDishsCatalog = props.catalog.pizza.map(dish => {
        if (props.finder.idDish === dish.idDish) {

            (props.user.likes.includes(dish.idDish) === true) ?
                imgLike = like :
                imgLike = likeO


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

    return (
        <div className={s.List}>
            <form action="">
                <input type="text" ref={newFinderElement} onChange={readNewFinderText} value={newFinderTextValue}/>
                <button onClick={onFinderDishs}>Find</button>
            </form>
            {finderDishsCatalog}
        </div>
    );
}

export default Finder;
