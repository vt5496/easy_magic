import React from "react";

import s from './Finder.module.css'
import DishesDOMContainer from "../../dishes/dishesDOM/DishesDOMContainer";
import WordsContainer from "./words/WordsContainer";
import cleanImg from './../../../img/cancel-circle.svg'
import {compose} from "redux";

const Finder = ({
                    user, catalog, dishesFinder,

                    sendInputValueToState,
                    sendFinderDishesToState, cleanFinderDishesInState,
                    sendFinderWordsToState, cleanFinderWordsInState,

                    cleanFinderInputInState
                }) => {

    const inputRef = React.createRef();
    const getRefValue = ref => ref.current.value;
    const getInputValueFromState = user => user.finderText;

    const checkStrValue = (value1, value2) =>
        value1.toLowerCase().includes(value2.toLowerCase())
    const checkAndDo = (boolean, func, arg) =>
        boolean && func(arg)


    const onReadInput = () => {
        sendInputValueToState(getRefValue(inputRef))
        cleanFinderWordsInState();
        (getRefValue(inputRef)) ?
            catalog.dishes.map(dish =>
                checkAndDo(checkStrValue(dish.name, getRefValue(inputRef)),
                    sendFinderWordsToState, dish.idDish)
            ) :
            cleanFinderWordsInState()
    }
    let onFindDish = (e) => {
        e.preventDefault()
        cleanFinderDishesInState()
        cleanFinderWordsInState();
        (getRefValue(inputRef)) ?
            catalog.dishes.map(dish =>
                checkAndDo(checkStrValue(dish.name, getRefValue(inputRef)),
                    sendFinderDishesToState, dish.idDish)
            ) :
            cleanFinderDishesInState()
    }

    const cleanFinderInput = compose(cleanFinderInputInState, cleanFinderWordsInState)

    return (
        <div className={s.List}>
            <form onSubmit={onFindDish}>
                <input type="text" className={s.input}
                       ref={inputRef} onChange={onReadInput}
                       value={getInputValueFromState(user)}/>
                <button className={s.button}>Find</button>
            </form>
            <img src={cleanImg} className={s.clean} onClick={cleanFinderInput}/>
            <WordsContainer/>
            <DishesDOMContainer filterBy={dishesFinder}/>
        </div>
    );
}

export default Finder;
