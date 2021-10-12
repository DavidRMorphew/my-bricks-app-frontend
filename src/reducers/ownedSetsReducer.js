const ownedSetsReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_OWNED_SETS':
            return action.payload
        default:
            return state
    }
}

export default ownedSetsReducer