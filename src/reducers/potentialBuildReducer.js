const potentialBuildReducer = (state = [], action) => {
    switch (action.type){
        case "ADD_POTENTIAL_BUILDS":
            return action.payload
        case 'TOGGLED_OWNED_VALUE':
            return []
        default:
            return state
    }
}

export default potentialBuildReducer