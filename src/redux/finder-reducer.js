const initialState = {
    dishs: [],
    words: []
}

let finderReducer = (state = initialState, {type, idDish, word}) => {
    switch (type) {
        case 'FINDER-DISHS':
            return {...state, dishs: [...state.dishs, idDish]}
        case 'FINDER-DISHS-EMPTY':
            return {...state, dishs: []}
        case 'FINDER-WORDS':
            return {...state, words: [...state.words, idDish]}
        case 'FINDER-WORDS-EMPTY':
            return {...state, words: []}
        default:
            return state
    }
    return state
}


export const finderDishsAC = ({idDish}) => {
    return ({
        type: 'FINDER-DISHS',
        idDish
    })
}

export const finderDishsEmptyAC = () => {
    return ({
        type: 'FINDER-DISHS-EMPTY'
    })
}

export const finderWordsAC = ({idDish}) => {
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