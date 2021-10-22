const ownedSetsReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_OWNED_SETS':
            return action.payload
        case 'ADD_NEW_OWNED_SET':
            return [...state, action.payload]
        case 'REMOVE_OWNED_SET':
            const ownedSet = state.find(set => set.id === action.payload)
            const indexToRemove = state.indexOf(ownedSet)
            return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)]
        default:
            return state
    }
}

export default ownedSetsReducer