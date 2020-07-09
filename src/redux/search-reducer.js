const searchReducer = (state, action) => {
    switch (action.type) {
        case 'NEW-FINDER-TEXT':
            state.finder.text = action.newFindText;
            break;
        case 'FIND-RESULT':
            state.finder.elements = action.findResult;
            break;
    }
            return state

}

export const readNewFindTextActionCreator = text => ({type: 'NEW-FINDER-TEXT', newFindText: text});
export const findResultActionCreator = findList => ({type: 'FIND-RESULT', findResult: findList})


export default searchReducer;