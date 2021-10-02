const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'REMOVE_USER':
            return {}
        case 'SET_USER':
            return user
        default:
            return state
    }
}

export default userReducer