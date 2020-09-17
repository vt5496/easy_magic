import React from "react";

import s from './Finder.module.css'
import MiniDishContainer from "../../someWhereUsesComp/dishCard/miniDishCard/MiniDishContainer";

const Finder = ({
                    user, catalog,
                    finderDishsArr, finderWordsArr,
                    readNewFinderInputValue,
                    finderDishs, finderDishsEmpty,
                    finderWords, finderWordsEmpty
                }) => {
    let finderInputRef = React.createRef();
    let finderInputValue = user.finderText;
    let onReadFinderInput = () => {
        let text = finderInputRef.current.value;
        readNewFinderInputValue(text)
        finderWordsEmpty()
        return (text) ?
            catalog.pizza.map(dish => {
                if (dish.name.toLowerCase().includes(text.toLowerCase())) {
                    finderWords(dish)
                }
            }) :
            finderWordsEmpty()
    }
    let findWordsArr = catalog.pizza.filter(d =>
        finderWordsArr.includes(d.idDish))
    let textsDOM = findWordsArr.map(d =>
        <div className={s.textsDOM}>
            {d.name}
        </div>)


    let onFindDish = (e) => {
        e.preventDefault()
        finderDishsEmpty()
        finderWordsEmpty()
        let text = finderInputRef.current.value;
        return (text) ?
            catalog.pizza.map(dish => {
                if (dish.name.toLowerCase().includes(text.toLowerCase())) {
                    finderDishs(dish)
                }
            }) :
            finderDishsEmpty()
    }
    let findDishsArr = catalog.pizza.filter(d =>
        finderDishsArr.includes(d.idDish))
    let findDOM = findDishsArr.map((d, i) =>
        <MiniDishContainer
            key={i}
            dish={d}
        />)

    return (
        <div className={s.List}>
            <form onSubmit={onFindDish}>
                <input type="text" className={s.input}
                       ref={finderInputRef} onChange={onReadFinderInput} value={finderInputValue}/>
                <button className={s.button}>Find</button>
            </form>
            {textsDOM}
            {findDOM}
        </div>
    );
}

export default Finder;
