let initialState = []

let finderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FINDER-EMPTY':
            return []
        case 'FINDER-DISHS':
            return [...state, action.idDish]
        default:
            return state
    }
    return state
}


export const finderDishsActionCreator = (dish) => {
    return ({
        type: 'FINDER-DISHS',
        idDish: dish.idDish
    })
}

export const finderEmptyActionCreator = () => {
    return ({
        type: 'FINDER-EMPTY'
    })
}

export default finderReducer;