
export const legoSetReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_SETS':
            return action.payload
        // case 'ADD_TO_OWNED':

        default:
            return state
    }
}