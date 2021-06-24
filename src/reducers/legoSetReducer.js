
export const legoSetReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_SETS':
            return action.payload
        default:
            return state
    }
}