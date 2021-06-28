export const partReducer = (state = [], action) => {
    switch (action.type){
        case "ADD_PARTS":
            return action.payload
        default:
            return state
    }
}