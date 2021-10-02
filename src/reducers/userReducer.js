const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'REMOVE_USER':
            return {}
        case 'SET_USER':
            return action.payload
        default:
            return state
    }
}

export default userReducer