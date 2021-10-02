const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'REMOVE_USER':
            return {}
        default:
            return state
    }
}

export default userReducer