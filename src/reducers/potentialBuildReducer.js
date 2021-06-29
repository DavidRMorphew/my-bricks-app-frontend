const potentialBuildReducer = (state = [], action) => {
    switch (action.type){
        case "ADD_POTENTIAL_BUILDS":
            return action.payload
        default:
            return state
    }
}

export default potentialBuildReducer