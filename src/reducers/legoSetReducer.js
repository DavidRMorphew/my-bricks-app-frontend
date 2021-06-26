
export const legoSetReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_SETS':
            return action.payload
        case 'ADD_TO_OWNED':
            const setForUpdateId = action.payload.id
            const setForUpdate = state.find(set => set.id === setForUpdateId)
            
            return [...state.slice(0, setForUpdateId), setForUpdate, ...state.slice(setForUpdateId + 1)]
        default:
            return state
    }
}