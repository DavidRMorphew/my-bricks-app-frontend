const setPartSpecsReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_SET_PART_SPECS':
            return action.payload
        default:
            return state
    }
}

export default setPartSpecsReducer