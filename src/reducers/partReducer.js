export const partReducer = (state = [], action) => {
    switch (action.type){
        case "ADD_PARTS":
            return [...state, ...action.payload]
        default:
            return state
    }
}