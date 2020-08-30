let initialState = []

let finderReducer = (state = initialState, {type, idDish}) => {
    switch (type) {
        case 'FINDER-EMPTY':
            return []
        case 'FINDER-DISHS':
            return [...state, idDish]
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

export const finderEmptyAC = () => {
    return ({
        type: 'FINDER-EMPTY'
    })
}

export default finderReducer;