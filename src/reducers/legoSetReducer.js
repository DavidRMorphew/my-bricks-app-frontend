
export const legoSetReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_SETS':
            return action.payload
        case 'ADDED_TO_OWNED':
            const setForUpdate = state.find(set => set.id === action.payload.id)
            const updatedSet = {...setForUpdate, owned: action.payload.owned}
            const setForUpdateIndex = state.indexOf(setForUpdate)
            
            return [...state.slice(0, setForUpdateIndex), updatedSet, ...state.slice(setForUpdateIndex + 1)]
        default:
            return state
    }
}