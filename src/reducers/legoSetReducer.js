
export const legoSetReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_SETS':
            return action.payload
        case 'ADDED_TO_OWNED':
            const setForUpdateId = action.payload.id
            const setForUpdate = state.find(set => set.id === setForUpdateId)
            const setForUpdateIndex = state.indexOf(setForUpdate)
            
            return [...state.slice(0, setForUpdateIndex), setForUpdate, ...state.slice(setForUpdateIndex + 1)]
        default:
            return state
    }
}