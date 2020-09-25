const initialState = {
    dishes: [],
    words: []
}

let finderReducer = (state = initialState, {type, idDish, word}) => {
    switch (type) {
        case 'FINDER-dishes':
            return {...state, dishes: [...state.dishes, idDish]}
        case 'FINDER-dishes-EMPTY':
            return {...state, dishes: []}
        case 'FINDER-WORDS':
            return {...state, words: [...state.words, idDish]}
        case 'FINDER-WORDS-EMPTY':
            return {...state, words: []}
        default:
            return state
    }
    return state
}


export const finderDishesAC = idDish => {
    return ({
        type: 'FINDER-dishes',
        idDish
    })
}

export const finderDishesEmptyAC = () => {
    return ({
        type: 'FINDER-dishes-EMPTY'
    })
}

export const finderWordsAC = idDish => {
    return ({
        type: 'FINDER-WORDS',
        idDish
    })
}

export const finderWordsEmptyAC = () => {
    return ({
        type: 'FINDER-WORDS-EMPTY'
    })
}

export default finderReducer;