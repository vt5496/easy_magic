import React from "react";

import s from './Finder.module.css'
import MiniDish from "../dishCard/miniDishCard/MiniDish";

const Finder = (props) => {

    let finderInputRef = React.createRef();
    let finderInputValue = props.user.finderText;

    let onReadFinderInput = () => {
        let text = finderInputRef.current.value;
        props.readNewFinderInputValue(text)
        props.finderWordsEmpty()
        return (text) ?
            props.catalog.pizza.map(dish => {
                if (dish.name.toLowerCase().includes(text.toLowerCase())) {
                    props.finderWords(dish)
                }
            }) :
            props.finderWordsEmpty()
    }
    let findWordsArr = props.catalog.pizza.filter(d =>
        props.finderWordsArr.includes(d.idDish))
    let textsDOM = findWordsArr.map(d =>
        <div>
            {d.name}
        </div>)


    let onFindDish = (e) => {
        e.preventDefault()
        props.finderDishsEmpty()
        props.finderWordsEmpty()
        let text = finderInputRef.current.value;
        return (text) ?
            props.catalog.pizza.map(dish => {
                if (dish.name.toLowerCase().includes(text.toLowerCase())) {
                    props.finderDishs(dish)
                }
            }) :
            props.finderDishsEmpty()
    }
    let findDishsArr = props.catalog.pizza.filter(d =>
        props.finderDishsArr.includes(d.idDish))
    let findDOM = findDishsArr.map((d, i) =>
        <MiniDish
            key={i}

            user={props.user}
            users={props.users}
            img={props.img}
            dish={d}

            addLike={props.addLike}
            removeLike={props.removeLike}
        />)

    return (
        <div className={s.List}>
            <form onSubmit={onFindDish}>
                <input type="text" ref={finderInputRef} onChange={onReadFinderInput} value={finderInputValue}/>
                <button>Find</button>
            </form>
            {textsDOM}
            {findDOM}
        </div>
    );
}

export default Finder;
