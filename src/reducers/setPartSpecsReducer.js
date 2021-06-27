export const setPartSpecsReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_SET_PART_SPECS':
            return [...state, ...action.payload]
        default:
            return state
    }
}