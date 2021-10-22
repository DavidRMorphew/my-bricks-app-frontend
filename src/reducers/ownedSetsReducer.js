const ownedSetsReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_OWNED_SETS':
            return action.payload
        case 'ADD_NEW_OWNED_SET':
            return [...state, action.payload]
        default:
            return state
    }
}

export default ownedSetsReducer